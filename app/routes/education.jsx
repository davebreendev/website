import EducationHome from "../pages/education/EducationHome";

import {
  getEducationData
} from "../.server/site-data";

export async function loader() {
  const education = await getEducationData();
  return { education };
}

export default function EducationRoute() {
  return (
    <EducationHome />
  );
}