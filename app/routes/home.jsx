import Home from "../pages/home/Home";

import { useRouteLoaderData } from "react-router";

export default function HomeRoute() {
  const { whoami, education, employers, jobs, influences, resources, interests } = useRouteLoaderData("app-layout");

  return (
    <Home
      whoami={whoami}
      education={education}
      employers={employers}
      jobs={jobs}
      influences={influences}
      resources={resources}
      interests={interests}
    />
  );
}
