-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "expirationDate" SET DATA TYPE TEXT,
ALTER COLUMN "receiptDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
