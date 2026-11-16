import Home from "../pages/home/Home";

import {
  getWebsiteData
} from "../.server/start-up";

export async function loader() {
  const loaderData = await getWebsiteData();
  return loaderData;
}

export function shouldRevalidate() {
  return false;
}

export default function HomeRoute() {

  return (
    <Home />
  );
}
