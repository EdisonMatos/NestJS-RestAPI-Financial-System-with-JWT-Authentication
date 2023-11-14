-- DropIndex
DROP INDEX "Income_customerId_key";

-- DropIndex
DROP INDEX "Income_name_key";

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
