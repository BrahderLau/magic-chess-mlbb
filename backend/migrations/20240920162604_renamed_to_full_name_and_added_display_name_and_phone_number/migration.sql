/*
  Warnings:

  - You are about to drop the column `name` on the `userprofile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phoneNumber]` on the table `userprofile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `display_name` to the `userprofile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `userprofile` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `userprofile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "userprofile" DROP COLUMN "name",
ADD COLUMN     "display_name" TEXT NOT NULL,
ADD COLUMN     "full_name" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT,
ALTER COLUMN "email" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "userprofile_phoneNumber_key" ON "userprofile"("phoneNumber");
