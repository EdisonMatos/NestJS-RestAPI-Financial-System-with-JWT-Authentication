import { MembershipType, Prisma } from '@prisma/client';

export class Membership implements Prisma.MembershipCreateInput {
  id?: string;
  price: number;
  name?: MembershipType;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  subscription?: Prisma.SubscriptionCreateNestedManyWithoutMembershipInput;
}
