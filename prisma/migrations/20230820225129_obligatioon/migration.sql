/*
  Warnings:

  - You are about to drop the `FatherTest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SonsTest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SonsTest" DROP CONSTRAINT "SonsTest_fathertestId_fkey";

-- AlterTable
ALTER TABLE "Obligation" ALTER COLUMN "expirationDate" DROP NOT NULL,
ALTER COLUMN "paymentDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';

-- DropTable
DROP TABLE "FatherTest";

-- DropTable
DROP TABLE "SonsTest";
