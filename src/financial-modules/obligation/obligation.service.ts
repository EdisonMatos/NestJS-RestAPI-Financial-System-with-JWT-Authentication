import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../application-modules/prisma/prisma.service';
import { CreateObligationDTO } from './dto/create-obligation.dto';
import { UpdateObligationDTO } from './dto/update-obligation.dto';

@Injectable()
export class ObligationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateObligationDTO) {
    try {
      const {
        customerId,
        name,
        description,
        price,
        isPaid,
        dueDate,
        paymentDate,
      } = data;

      const foundObligation = await this.prisma.obligation.findFirst({
        where: {
          name,
        },
      });

      if (foundObligation) {
        Logger.error('Obligation already exists');
        throw new ConflictException('Obligation already exists');
      }

      const createdObligation = await this.prisma.obligation.create({
        data: {
          customerId,
          name,
          description,
          price,
          isPaid,
          dueDate,
          paymentDate,
        },
      });

      return createdObligation;
    } catch (error) {
      Logger.error(
        error,
        'Obligation already exists',
        'ObligationService',
        true,
      );
      throw new ConflictException('Obligation already exists.');
    }
  }

  async findAll() {
    const foundAll = this.prisma.obligation.findMany();

    return foundAll;
  }

  async findOne(id: string) {
    try {
      const foundObligation = await this.prisma.obligation.findFirst({
        where: {
          id,
        },
      });

      if (!foundObligation) {
        Logger.error('Obligation not found', '', 'ObligationService', true);
        throw new NotFoundException('Obligation not found');
      }

      return foundObligation;
    } catch (error) {
      Logger.error(error, '', 'ObligationService', true);
      throw error;
    }
  }

  async update(id: string, data: UpdateObligationDTO) {
    await this.findOne(id);

    try {
      const updatedObligation = await this.prisma.obligation.update({
        data,
        where: {
          id,
        },
      });

      return updatedObligation;
    } catch (error) {
      Logger.error(error, '', 'ObligationService', true);
      throw error;
    }
  }

  async delete(id: string) {
    await this.findOne(id);

    if (!(await this.findOne(id))) {
      throw new NotFoundException('Obligation not found');
    } else {
      return this.prisma.obligation.delete({
        where: {
          id,
        },
      });
    }
  }
}
