import { prisma } from "./db";

async function getWhoamiData() {
  try {
    const whoami = await prisma.whoami.findFirst();
    return whoami;
  }
  catch (error) {
    console.error(`getWhoamiData: ERROR---`);
    console.error(`[${error.code}]:`, error.message);
  }
}

async function main() {
  console.log('⚡ Updating db...');
  getWhoamiData();
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
