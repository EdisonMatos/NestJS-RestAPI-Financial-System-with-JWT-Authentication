import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../application-modules/prisma/prisma.service';
import { CreateSubscriptionDTO } from './dto/create-subscription.dto';
import { UpdateSubscriptionDTO } from './dto/update-subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSubscriptionDTO) {
    const { membershipId, customerId, isPaid } = data;

    try {
      const foundSubscription = await this.prisma.subscription.findFirst({
        where: {
          isPaid,
          membershipId,
          customerId,
        },
      });

      if (foundSubscription) {
        Logger.error('Subscription already exist', '', true);
        throw new ConflictException('Subscription already exist');
      }

      const createdSubscription = await this.prisma.subscription.create({
        data: {
          membershipId,
          customerId,
          isPaid,
        },
      });

      return createdSubscription;
    } catch (error) {
      Logger.error('This customer already have a subscription', '');
      throw new ConflictException('This customer already have a subscription');
    }
  }

  async findAll() {
    const findAll = this.prisma.subscription.findMany();

    return findAll;
  }

  async findOne(id: string) {
    try {
      const foundSubscription = await this.prisma.subscription.findFirst({
        where: {
          id,
        },
      });

      if (!foundSubscription) {
        Logger.error('Subscription not found', '', 'SubscriptionService', true);
        throw new NotFoundException('Subscription not found');
      }
      return foundSubscription;
    } catch (error) {
      Logger.error(error, '', 'SubscriptionService', true);
      throw error;
    }
  }

  async update(id: string, data: UpdateSubscriptionDTO) {
    await this.findOne(id);

    try {
      const updatedSubcription = await this.prisma.subscription.update({
        data,
        where: {
          id,
        },
      });
      return updatedSubcription;
    } catch (error) {
      Logger.error(error, '', 'SubscriptionService', true);
      throw error;
    }
  }

  async delete(id: string) {
    await this.findOne(id);

    if (!(await this.findOne(id))) {
      throw new NotFoundException('Subscription not found');
    } else {
      return this.prisma.subscription.delete({
        where: {
          id,
        },
      });
    }
  }
}
