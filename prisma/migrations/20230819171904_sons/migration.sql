/*
  Warnings:

  - Added the required column `name` to the `SonsTest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SonsTest" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
