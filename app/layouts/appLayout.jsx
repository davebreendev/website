import { Outlet } from "react-router";

import {
  getWhoamiData,
  getEducationData,
  getEmployersData,
  getJobsData,
  getInfluencesData,
  getResourcesData,
  getInterestsData
} from "../.server/fetch-website";

export async function loader() {
  const [whoami, education, employers, jobs, influences, resources, interests] = await Promise.all([
    getWhoamiData(),
    getEducationData(),
    getEmployersData(),
    getJobsData(),
    getInfluencesData(),
    getResourcesData(),
    getInterestsData(),
  ]);
  return { whoami, education, employers, jobs, influences, resources, interests };
}

export default function AppLayout() {
  return <Outlet />;
}