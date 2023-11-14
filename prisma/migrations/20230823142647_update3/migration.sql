-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_membershipId_fkey";

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "membershipId" DROP NOT NULL,
ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;
