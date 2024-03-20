import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    await app.listen(process.env.PORT);
    console.log(`Successfully started on port:${process.env.PORT}`);
  } catch (error) {
    console.error(error);
  }
}
bootstrap();
