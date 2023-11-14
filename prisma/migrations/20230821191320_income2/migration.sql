/*
  Warnings:

  - You are about to drop the column `is` on the `Income` table. All the data in the column will be lost.
  - Added the required column `isPaid` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Income" DROP COLUMN "is",
ADD COLUMN     "isPaid" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
