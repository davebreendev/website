import { Outlet } from "react-router";

import {
  getEducationData
} from "../.server/start-up";

import {
  getGallery
} from "../.server/site-data";

export async function loader() {
  const education = await getEducationData();
  const gallery = await getGallery("Institution_1");
  return { education, gallery };
}

export default function EducationLayout() {
  return <Outlet />;
}