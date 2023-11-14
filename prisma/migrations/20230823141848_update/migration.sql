/*
  Warnings:

  - A unique constraint covering the columns `[membershipId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_membershipId_fkey";

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "membershipId" DROP NOT NULL,
ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_membershipId_key" ON "Subscription"("membershipId");

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;
