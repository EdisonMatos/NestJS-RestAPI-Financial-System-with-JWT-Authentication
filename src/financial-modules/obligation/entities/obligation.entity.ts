import { Prisma } from '@prisma/client';

export class Obligation implements Prisma.ObligationCreateInput {
  id?: string;
  name: string;
  description: string;
  dueDate: string;
  paymentDate: string;
  price: number;
  isPaid: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  customer: Prisma.CustomerCreateNestedOneWithoutObligationsInput;
}
