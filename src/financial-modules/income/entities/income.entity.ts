import { Prisma } from '@prisma/client';

export class Income implements Prisma.IncomeCreateInput {
  id?: string;
  name: string;
  description: string;
  dueDate: string;
  receiptDate: string;
  price: number;
  isPaid: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  customer: Prisma.CustomerCreateNestedOneWithoutIncomingsInput;
}
