import InterestsHome from "../pages/interests/InterestsHome";

import {
  getInterestsData
} from "../.server/site-data";

export async function loader() {
  const interests = await getInterestsData();
  return { interests };
}

export default function InterestsRoute() {
  return (
    <InterestsHome />
  );
}