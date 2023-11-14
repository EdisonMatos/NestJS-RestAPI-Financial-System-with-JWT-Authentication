/*
  Warnings:

  - You are about to drop the column `credit` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "credit",
ALTER COLUMN "birthdate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
