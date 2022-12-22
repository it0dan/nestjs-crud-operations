import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
const mongoose = require('mongoose');

const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected and Running 🔥...'))
  .catch(err => console.log(err));

  async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    await app.listen(3000);
  }
  bootstrap();