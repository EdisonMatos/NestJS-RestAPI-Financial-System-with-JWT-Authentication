/*
  Warnings:

  - Made the column `expirationDate` on table `Obligation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `paymentDate` on table `Obligation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Obligation" ALTER COLUMN "expirationDate" SET NOT NULL,
ALTER COLUMN "expirationDate" SET DATA TYPE TEXT,
ALTER COLUMN "paymentDate" SET NOT NULL,
ALTER COLUMN "paymentDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
