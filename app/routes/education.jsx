import EducationHome from "../pages/education/EducationHome";

import { useRouteLoaderData } from "react-router";

export default function EducationRoute() {
  const { education, galleryId } = useRouteLoaderData("education-layout");
  return (
    <EducationHome
      education={education}
      galleryId={galleryId}
    />
  );
}
