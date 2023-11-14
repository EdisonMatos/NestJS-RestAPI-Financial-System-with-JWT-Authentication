-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "role" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
