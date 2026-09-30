import { Prisma } from "../generated/prisma/client";
import { prisma } from "./db";

export async function getWebsiteData() {
  const [whoami, education, employers, jobs, influences, resources, interests] = await Promise.all([
    prisma.whoami.findFirst(),
    prisma.education.findMany(),
    prisma.employers.findMany(),
    prisma.jobs.findMany(),
    prisma.influences.findMany(),
    prisma.resources.findMany(),
    prisma.interests.findMany()
  ]);
  console.log(`getWebsiteData`);

  return { whoami, education, employers, jobs, influences, resources, interests };
}
