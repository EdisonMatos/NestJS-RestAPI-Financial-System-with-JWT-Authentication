/*
  Warnings:

  - You are about to drop the column `expirationDate` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `expirationDate` on the `Obligation` table. All the data in the column will be lost.
  - Added the required column `dueDate` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `Obligation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Income" DROP COLUMN "expirationDate",
DROP COLUMN "value",
ADD COLUMN     "dueDate" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Obligation" DROP COLUMN "expirationDate",
ADD COLUMN     "dueDate" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';
