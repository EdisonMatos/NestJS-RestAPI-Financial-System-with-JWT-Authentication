import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PrismaService } from '../../application-modules/prisma/prisma.service';
import { GetCustomerDto } from './dto/get-customer.dto';
import { UpdateCustomersDto } from './dto/update-customer.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateCustomerDto) {
    const { name, email, password, phone, birthdate } = data;

    const salt = await bcrypt.genSalt(+process.env.HASH_SALT);

    const hashedPassword = await bcrypt.hash(data.password, salt);

    data.password = hashedPassword;

    try {
      const foundCustomer = await this.prisma.customer.findFirst({
        where: {
          phone,
          email,
        },
      });

      if (foundCustomer) {
        Logger.error('Customer already created', '', 'CustomerService', true);
        throw new ConflictException(`Customer already created`);
      }

      const createdUser = await this.prisma.customer.create({
        data,
      });

      return createdUser;
    } catch (error) {
      Logger.error(error, '', 'CustomerService', true);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const foundCustomer = await this.prisma.customer.findFirst({
        where: {
          id,
        },
      });

      if (!foundCustomer) {
        Logger.error('Customer not found', '', 'CustomerService', true);
        throw new NotFoundException('Customer not found');
      }
      return foundCustomer;
    } catch (error) {
      Logger.error(error, '', 'CustomerService', true);
      throw error;
    }
  }

  async findAll() {
    const findAll =
      this.prisma.customer.findMany() as unknown as GetCustomerDto[];

    return findAll;
  }

  async update(id: string, data: UpdateCustomersDto) {
    await this.findOne(id);

    const salt = await bcrypt.genSalt(+process.env.HASH_SALT);

    const hashedPassword = await bcrypt.hash(data.password, salt);

    data.password = hashedPassword;

    try {
      const updatedCustomer = await this.prisma.customer.update({
        data,
        where: {
          id,
        },
      });

      return updatedCustomer;
    } catch (error) {
      Logger.error(error, '', 'CustomerService', true);
      throw error;
    }
  }

  async delete(id: string) {
    await this.findOne(id);

    if (!(await this.findOne(id))) {
      throw new NotFoundException('');
    } else {
      return this.prisma.customer.delete({
        where: {
          id,
        },
      });
    }
  }
}
