/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `userprofile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone_number]` on the table `userprofile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "userprofile_phoneNumber_key";

-- AlterTable
ALTER TABLE "userprofile" DROP COLUMN "phoneNumber",
ADD COLUMN     "phone_number" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "userprofile_phone_number_key" ON "userprofile"("phone_number");
