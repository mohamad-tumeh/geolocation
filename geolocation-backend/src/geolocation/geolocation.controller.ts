import { Controller, Post, Body } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';

@Controller('geolocation')
export class GeolocationController {
  constructor(private readonly geolocationService: GeolocationService) {}

  @Post()
  async getGeolocation(@Body() body: { address: string; email?: string }) {
    return this.geolocationService.getGeolocation(body.address, body.email);
  }
}
