import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import professionalUser from "./professionalUser.js";
import recruiterUser from "./recruiterUser.js";

async function addprofessionalUserToDb() {
  for (const user of professionalUser) {
    await prisma.professionalUser.create({
      data: {
        ...user,
      },
    });
  }
}

async function addRecruiterUserToDb() {
  for (const user of recruiterUser) {
    await prisma.recruiterUser.create({ data: { ...user } });
  }
}

async function main() {
  // await addprofessionalUserToDb();
  await addRecruiterUserToDb();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
