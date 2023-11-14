import { Prisma } from '@prisma/client';

export class Subscription implements Prisma.SubscriptionCreateInput {
  id?: string;
  isPaid?: boolean;
  startDate?: string | Date;
  endDate?: string | Date;
  membership: Prisma.MembershipCreateNestedOneWithoutSubscriptionInput;
  customer: Prisma.CustomerCreateNestedOneWithoutSubscriptionInput;
}
