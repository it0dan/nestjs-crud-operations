import { Module } from '@nestjs/common';
import { CustomersService } from '../../services/customers.service';
import { CustomersController } from '../../controllers/customers.controller';
import { customersProviders } from './customers.providers';
import { DatabaseModule } from 'src/repository/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './entities/customer.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }]), DatabaseModule],
  controllers: [CustomersController],
  providers: [CustomersService, ...customersProviders],
})
export class CustomersModule {}
