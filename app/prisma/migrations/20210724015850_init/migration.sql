-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birthday" DATE NOT NULL,

    PRIMARY KEY ("id")
);
