import { Module, forwardRef } from '@nestjs/common';
import { CustomerModule } from './users-modules/customer/customer.module'
import { PrismaModule } from './application-modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MembershipModule } from './membership-modules/membership/membership.module';
import { AuthModule } from './application-modules/auth/auth.module';
import { ObligationModule } from './financial-modules/obligation/obligation.module';
import { IncomeModule } from './financial-modules/income/income.module';
import { SubscriptionModule } from './membership-modules/subscription/subscription.module';

@Module({
  imports: [
    MembershipModule,
    ObligationModule,
    IncomeModule,
    SubscriptionModule,
    forwardRef(() => CustomerModule),
    PrismaModule,
    ConfigModule.forRoot(),
    forwardRef(() => AuthModule),
  ],
})
export class AppModule {}
