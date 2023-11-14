/*
  Warnings:

  - You are about to drop the column `description` on the `Obligation` table. All the data in the column will be lost.
  - You are about to drop the column `expirationDate` on the `Obligation` table. All the data in the column will be lost.
  - You are about to drop the column `isPaid` on the `Obligation` table. All the data in the column will be lost.
  - You are about to drop the column `paymentDate` on the `Obligation` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Obligation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Obligation" DROP CONSTRAINT "Obligation_customerId_fkey";

-- DropIndex
DROP INDEX "Obligation_customerId_key";

-- AlterTable
ALTER TABLE "Obligation" DROP COLUMN "description",
DROP COLUMN "expirationDate",
DROP COLUMN "isPaid",
DROP COLUMN "paymentDate",
DROP COLUMN "price",
ALTER COLUMN "customerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';

-- AddForeignKey
ALTER TABLE "Obligation" ADD CONSTRAINT "Obligation_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
