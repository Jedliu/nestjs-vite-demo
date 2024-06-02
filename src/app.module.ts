// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import path, { join } from 'path';
import { fileURLToPath } from 'url';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { UsersModule } from './users/users.module';

let dirname = '';

try {
  dirname = __dirname;
} catch (ex) {
  const __filename = fileURLToPath(import.meta.url);
  dirname = path.dirname(__filename);
}

@Module({
  imports: [
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(dirname, '..', 'client'),
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
