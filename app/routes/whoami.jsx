import WhoamiHome from "../pages/whoami/WhoamiHome";

import {
  getWhoamiData
} from "../.server/site-data";

export async function loader() {
  const whoami = await getWhoamiData();
  return { whoami };
}

export default function WhoamiRoute() {
  return (
    <WhoamiHome />
  );
}
