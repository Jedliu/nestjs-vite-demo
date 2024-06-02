// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { UsersModule } from './users/users.module';

const __dirname__ =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

@Module({
  imports: [
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname__, '..', 'client'),
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
