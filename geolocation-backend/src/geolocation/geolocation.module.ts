import { Module } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { GeolocationController } from './geolocation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../database/entities/address.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Address]),
    MailerModule,
  ],
  controllers: [GeolocationController],
  providers: [GeolocationService],
})
export class GeolocationModule {}
