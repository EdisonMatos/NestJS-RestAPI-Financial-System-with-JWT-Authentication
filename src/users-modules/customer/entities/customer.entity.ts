import { Prisma } from '@prisma/client';

export class Customer implements Prisma.CustomerUncheckedCreateInput {
  id?: string;
  phone: string;
  name: string;
  email: string;
  password: string;
  birthdate: string;
  subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutCustomerInput;
  obligations?: Prisma.ObligationUncheckedCreateNestedManyWithoutCustomerInput;
  incomings?: Prisma.IncomeUncheckedCreateNestedManyWithoutCustomerInput;
}
