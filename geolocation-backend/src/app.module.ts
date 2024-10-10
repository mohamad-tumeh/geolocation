import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { MailModule } from './mailer/mailer.module';
import { GeolocationModule } from './geolocation/geolocation.module';

@Module({
  imports: [GeolocationModule, DatabaseModule, MailModule],
})
export class AppModule {}
