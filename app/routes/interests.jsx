import InterestsHome from "../pages/interests/InterestsHome";

import { useRouteLoaderData } from "react-router";

export default function InterestsRoute() {
  const { interests } = useRouteLoaderData("app-layout");
  return (
    <InterestsHome
      interests={interests}
    />
  );
}
