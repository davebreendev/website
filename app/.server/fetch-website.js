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

  return { whoami, education, employers, jobs, influences, resources, interests };
}

export async function getWhoamiData() {
  try {
    const whoami = await prisma.whoami.findFirst();
    return whoami;
  }
  catch (error) {
    console.log(`getWhoamiData: ERROR---`)
    // Known Prisma Engine Errors (Database constraints, target not found, etc.)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}

export async function getEducationData() {
  try {
    const education = await prisma.education.findMany();
    return education;
  }
  catch (error) {
    console.log(`getEducationData: ERROR---`);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}

export async function getEmployersData() {
  try {
    const employers = await prisma.employers.findMany();
    return employers;
  }
  catch (error) {
    console.log(`getEmployersData: ERROR---`);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}

export async function getJobsData() {
  try {
    const jobs = await prisma.jobs.findMany();
    return jobs;
  }
  catch (error) {
    console.log(`getJobsData: ERROR---`);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}

export async function getInfluencesData() {
  try {
    const influences = await prisma.influences.findMany();
    return influences;
  }
  catch (error) {
    console.log(`getInfluencesData: ERROR---`);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}

export async function getResourcesData() {
  try {
    const resources = await prisma.resources.findMany();
    return resources;
  }
  catch (error) {
    console.log(`getResourcesData: ERROR---`);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}

export async function getInterestsData() {
  try {
    const interests = await prisma.interests.findMany();
    return interests;
  }
  catch (error) {
    console.log(`getInterestsData: ERROR---`);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}
