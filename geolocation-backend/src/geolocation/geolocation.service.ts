import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../database/entities/address.entity';
import axios from 'axios';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class GeolocationService {
    constructor(
        @InjectRepository(Address)
        private addressRepository: Repository<Address>,
        private readonly mailerService: MailerService,
    ) {}

    async getGeolocation(address: string, email?: string) {
        let addressEntity = await this.findAddressInDatabase(address);

        if (!addressEntity) {
            addressEntity = await this.fetchGeolocationData(address);
        }

        if (email) {
            await this.sendGeolocationEmail(address, addressEntity, email);
        }

        return { lat: addressEntity.lat, lng: addressEntity.lng };
    }

    private async findAddressInDatabase(address: string): Promise<Address | null> {
        return await this.addressRepository.findOne({ where: { address } });
    }

    private async fetchGeolocationData(address: string): Promise<Address> {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
        
        if (response.data.length === 0) {
            throw new NotFoundException('Unable to find geolocation for the provided address.');
        }

        const { lat, lon } = response.data[0];
        const addressEntity = this.addressRepository.create({ address, lat, lng: lon });
        await this.addressRepository.save(addressEntity);

        return addressEntity;
    }

    private async sendGeolocationEmail(address: string, addressEntity: Address, email: string) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Geolocation Results',
            text: `The geolocation for ${address} is:\nLatitude: ${addressEntity.lat}\nLongitude: ${addressEntity.lng}`,
        });
    }
}
