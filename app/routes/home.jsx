import Main from "../components/main/Main";

import { useRouteLoaderData } from "react-router";

export default function HomeRoute() {
  const { whoami, education, employers, jobs, influences, resources, interests } = useRouteLoaderData("app-layout");

  return (
    <Main
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
