-- CreateTable
CREATE TABLE "professionalUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "birthday" TEXT,
    "linkedinUrl" TEXT,
    "Title" TEXT,
    "experience" TEXT,
    "education" TEXT,
    "cvImage" TEXT,

    CONSTRAINT "professionalUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recruiterUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "companyName" TEXT,
    "website" TEXT,
    "aboutCompany" TEXT,
    "companyLogo" TEXT,

    CONSTRAINT "recruiterUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "professionalUser_email_key" ON "professionalUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "recruiterUser_email_key" ON "recruiterUser"("email");
