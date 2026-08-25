import { Prisma } from "../generated/prisma/client";
import { prisma } from "./db";

export async function getGallery(galleryTopic) {
  try {
    const gallery = await prisma.galleries.findFirst({ where: { galleryTopic: galleryTopic } });
    return gallery;
  }
  catch (error) {
    console.log(`getGallery: ERROR---`);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}

export async function getImages(topic) {
  try {
    const images = await prisma.galleries.findMany({ where: { galleryTopic: topic } });
    return images;
  }
  catch (error) {
    console.log(`getImages: ERROR---`);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}