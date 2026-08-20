import { Prisma } from "../generated/prisma/client";
import { prisma } from "./db";

export async function getGallery(galleryTopic) {
  try {
    const galleryId = await prisma.galleries.findFirst({ where: { galleryTopic: galleryTopic } });
    return galleryId;
  }
  catch (error) {
    console.log(`getGallery: ERROR---`);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Known Error [${error.code}]:`, error.message);
    }
  }
}