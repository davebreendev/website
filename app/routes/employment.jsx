import EmploymentHome from "../pages/employment/EmploymentHome";

import {
  getEmployersData,
  getJobsData
} from "../.server/site-data";

export async function loader() {
  const employers = await getEmployersData();
  const jobs = await getJobsData();
  return { employers, jobs };
}

export default function EmploymentRoute() {
  return (
    <EmploymentHome />
  );
}