/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 month';

-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "FatherTest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FatherTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SonsTest" (
    "id" TEXT NOT NULL,
    "fathertestId" TEXT NOT NULL,

    CONSTRAINT "SonsTest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SonsTest_fathertestId_key" ON "SonsTest"("fathertestId");

-- AddForeignKey
ALTER TABLE "SonsTest" ADD CONSTRAINT "SonsTest_fathertestId_fkey" FOREIGN KEY ("fathertestId") REFERENCES "FatherTest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
