import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { PrismaService } from '../../application-modules/prisma/prisma.service';
import { GetMembershipDto } from './dto/get-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { find } from 'rxjs';

@Injectable()
export class MembershipService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateMembershipDto) {
    const { price, name } = data;

    try {
      const foundMembership = await this.prisma.membership.findFirst({
        where: {
          price,
        },
      });

      if (foundMembership) {
        Logger.error(
          'Membership already created',
          '',
          'MembershipService',
          true,
        );
        throw new ConflictException('Membership already created');
      }

      const createdMembership = await this.prisma.membership.create({
        data,
      });

      return createdMembership;
    } catch (error) {
      Logger.error(error, '', 'MembershipService', true);
      throw error;
    }
  }

  async findAll() {
    const findAll =
      this.prisma.membership.findMany() as unknown as GetMembershipDto[];
    return findAll;
  }

  async findOne(id: string) {
    try {
      const foundMembership = await this.prisma.membership.findFirst({
        where: {
          id,
        },
      });

      if (!foundMembership) {
        Logger.error('Membership not found', '', 'MembershipService', true);
        throw new NotFoundException('Membership not found');
      }
      return foundMembership;
    } catch (error) {
      Logger.error(error, '', 'MembershipService', true);
      throw error;
    }
  }

  async update(id: string, data: UpdateMembershipDto) {
    await this.findOne(id);

    try {
      const updatedMembership = this.prisma.membership.update({
        data,
        where: {
          id,
        },
      });
      return updatedMembership;
    } catch (error) {
      Logger.error(error, '', 'MembershipService', true);
      throw error;
    }
  }

  async delete(id: string) {
    await this.findOne(id);

    if (!(await this.findOne(id))) {
      throw new NotFoundException('Membership not found');
    } else {
      return this.prisma.membership.delete({
        where: {
          id,
        },
      });
    }
  }
}
