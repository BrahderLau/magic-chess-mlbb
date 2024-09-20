-- CreateTable
CREATE TABLE "gameprofile" (
    "id" SERIAL NOT NULL,
    "ign" TEXT,
    "account" TEXT,
    "server" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "gameprofile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userprofile" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userprofile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gameprofile_account_key" ON "gameprofile"("account");

-- CreateIndex
CREATE UNIQUE INDEX "userprofile_email_key" ON "userprofile"("email");

-- AddForeignKey
ALTER TABLE "gameprofile" ADD CONSTRAINT "gameprofile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "userprofile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
