import InfluencesHome from "../pages/influences/InfluencesHome";

import {
  getInfluencesData,
  getResourcesData
} from "../.server/site-data";

export async function loader() {
  const influences = await getInfluencesData();
  const resources = await getResourcesData();
  return { influences, resources };
}

export default function InfluencesRoute() {
  return (
    <InfluencesHome />
  );
}