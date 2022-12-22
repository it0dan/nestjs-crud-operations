import { Module } from '@nestjs/common';
import { CustomersModule } from './models/customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.mongodb.net/?retryWrites=true&w=majority`
      })
    }),
    CustomersModule,
    ConfigModule.forRoot()]
})
export class AppModule {}