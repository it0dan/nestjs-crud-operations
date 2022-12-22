import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {

  constructor(@Inject('CUSTOMER_MODEL') private customerModel: Model<Customer>) {}

  create(createCustomerDto: CreateCustomerDto) {
    const customer = new this.customerModel(createCustomerDto);
    return customer.save();
  }

  findAll() {
    return this.customerModel.find();
  }

  findOne(id: string) {
    return this.customerModel.findById(id)
    .catch(() => {
      throw new NotFoundException('Customer does not exist');
    });
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.findByIdAndUpdate(
      {
        _id: id
      },
      {
        $set: updateCustomerDto
      },
      {
        new: true
      }
    )
    .catch(() => {
      throw new NotFoundException('Customer does not exist');
    });
  }

  remove(id: string) {
    return this.customerModel.deleteOne(
      {
        _id: id
      }
    )
    .catch(() => {
      throw new NotFoundException('Customer does not exist');
    });
  }
}
