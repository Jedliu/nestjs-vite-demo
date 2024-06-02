// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function createApp() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  return app;
}
export const viteNodeApp = createApp();
