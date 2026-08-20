import WhoamiHome from "../pages/whoami/WhoamiHome";

import { useRouteLoaderData } from "react-router";

export default function WhoamiRoute() {
  const { whoami } = useRouteLoaderData("app-layout");
  return (
    <WhoamiHome
      whoami={whoami}
    />
  );
}
