import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'geolocation_db',
      entities: [Address],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Address]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
