-- DropIndex
DROP INDEX "SonsTest_fathertestId_key";

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
