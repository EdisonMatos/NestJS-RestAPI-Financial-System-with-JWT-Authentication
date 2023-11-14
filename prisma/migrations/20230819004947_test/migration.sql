/*
  Warnings:

  - Added the required column `description` to the `Obligation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationDate` to the `Obligation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPaid` to the `Obligation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentDate` to the `Obligation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Obligation` table without a default value. This is not possible if the table is not empty.
  - Made the column `customerId` on table `Obligation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Obligation" DROP CONSTRAINT "Obligation_customerId_fkey";

-- AlterTable
ALTER TABLE "Obligation" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isPaid" BOOLEAN NOT NULL,
ADD COLUMN     "paymentDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "customerId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Obligation" ADD CONSTRAINT "Obligation_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
