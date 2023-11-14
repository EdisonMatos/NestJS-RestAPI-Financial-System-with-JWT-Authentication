import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { PrismaModule } from '../../application-modules/prisma/prisma.module';

@Module({
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  imports: [PrismaModule],
})
export class SubscriptionModule {}
