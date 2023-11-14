/*
  Warnings:

  - Made the column `membershipId` on table `Subscription` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_membershipId_fkey";

-- DropIndex
DROP INDEX "Subscription_membershipId_key";

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "membershipId" SET NOT NULL,
ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
