import EmploymentHome from "../pages/employment/EmploymentHome";

import { useRouteLoaderData } from "react-router";

export default function EmploymentRoute() {
  const { employment } = useRouteLoaderData("app-layout");
  return (
    <EmploymentHome
      employment={employment}
    />
  );
}
