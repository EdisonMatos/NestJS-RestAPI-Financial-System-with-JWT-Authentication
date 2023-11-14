import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../application-modules/prisma/prisma.service';
import { CreateIncomeDTO } from './dto/create-income.dto';
import { UpdateIncomeDTO } from './dto/update-income.dto';

@Injectable()
export class IncomeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateIncomeDTO) {
    try {
      const {
        customerId,
        name,
        description,
        dueDate,
        receiptDate,
        price,
        isPaid,
      } = data;

      const foundIncome = await this.prisma.income.findFirst({
        where: {
          name,
        },
      });

      if (foundIncome) {
        Logger.error('Income already create.', true);
        throw new ConflictException('Income already created.');
      }

      const createdIncome = await this.prisma.income.create({
        data: {
          customerId,
          name,
          description,
          dueDate,
          receiptDate,
          price,
          isPaid,
        },
      });

      return createdIncome;
    } catch (error) {
      Logger.error(error, 'Income already created', true);
      throw new ConflictException('Income already created');
    }
  }

  async findAll() {
    const findAll = this.prisma.income.findMany();

    return findAll;
  }

  async findOne(id: string) {
    try {
      const foundIncome = await this.prisma.income.findFirst({
        where: {
          id,
        },
      });

      if (!foundIncome) {
        Logger.error('Income not found', '', 'IncomeService', true);
        throw new NotFoundException('Income not found');
      }

      return foundIncome;
    } catch (error) {
      Logger.error(error, '', 'IncomeService', true);
      throw error;
    }
  }

  async update(id: string, data: UpdateIncomeDTO) {
    await this.findOne(id);

    try {
      const updatedIncome = await this.prisma.income.update({
        data,
        where: {
          id,
        },
      });

      return updatedIncome;
    } catch (error) {
      Logger.error(error, '', 'IncomeService', true);
      throw error;
    }
  }

  async delete(id: string) {
    await this.findOne(id);

    if (!(await this.findOne(id))) {
      throw new NotFoundException('Income not found');
    } else {
      return this.prisma.income.delete({
        where: {
          id,
        },
      });
    }
  }
}
