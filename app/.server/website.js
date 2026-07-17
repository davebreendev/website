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

  return { whoami, education, employers, jobs, influences, resources, interests };
}

export async function getWhoamiData() {
  const whoami = await prisma.whoami.findFirst();
  return whoami;
}

export async function getEducationData() {
  const education = await prisma.education.findMany();
  return education;
}

export async function getEmployersData() {
  const employers = await prisma.employers.findMany();
  return employers;
}

export async function getJobsData() {
  const jobs = await prisma.jobs.findMany();
  return jobs;
}

export async function getInfluencesData() {
  const influences = await prisma.influences.findMany();
  return influences;
}

export async function getResourcesData() {
  const resources = await prisma.resources.findMany();
  return resources;
}

export async function getInterestsData() {
  const interests = await prisma.interests.findMany();
  return interests;
}
