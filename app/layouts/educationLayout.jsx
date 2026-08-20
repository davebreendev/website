import { Outlet } from "react-router";
// import { prisma } from "../.server/db"; // Your Prisma client

// 1. Declare 'params' in the loader arguments to receive URL variables
export async function loader({ params }) {
  const { siteId } = params;

  if (!siteId) {
    console.log(`siteId not found`);
  }

  console.log(`siteId Found: ${siteId}`);
  // Ad-hoc read: Fetch ONLY data for this specific site
  // const siteData = await prisma.site.findUnique({
  //   where: { id: siteId },
  //   include: {
  //     pages: true, // Fetch related sub-pages if needed
  //   },
  // });

  // if (!siteData) {
  //   throw new Response("Site not found", { status: 404 });
  // }

  return { siteId };
}