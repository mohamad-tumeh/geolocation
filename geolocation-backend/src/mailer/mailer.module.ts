import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'mhamadtumeh123123@gmail.com',
          pass: 'zwdvfjahivtuqxjl',
        },
      },
      defaults: {
        from: '"Geolocation App" <no-reply@geolocation.com>',
      },
    }),
  ],
})
export class MailModule {}
