import EducationHome from "../components/education/EducationHome";

import { useRouteLoaderData } from "react-router";

export default function EducationRoute() {
  const { education } = useRouteLoaderData("app-layout");
  return (
    <EducationHome
      education={education}
    />
  );
}
