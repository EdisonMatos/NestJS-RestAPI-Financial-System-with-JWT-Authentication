/*
  Warnings:

  - The `role` column on the `Customer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Customer');

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Customer';

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
