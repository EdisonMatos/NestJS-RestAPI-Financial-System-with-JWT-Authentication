/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Income` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';

-- CreateIndex
CREATE UNIQUE INDEX "Income_name_key" ON "Income"("name");
