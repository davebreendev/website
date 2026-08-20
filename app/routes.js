import { layout, route, index } from "@react-router/dev/routes";

export default [
  layout("./layouts/appLayout.jsx", { id: "app-layout" }, [
    route("/", "./pages/root/Root.jsx", [
      index("./routes/home.jsx"),
      route("whoami", "./pages/whoami/WhoamiHome.jsx"),
      route("education", "./pages/education/EducationHome.jsx"),
      route("employment", "./pages/employment/EmploymentHome.jsx"),
      route("influences", "./pages/influences/InfluencesHome.jsx"),
      route("interests", "./pages/interests/InterestsHome.jsx"),
      route("*", "./pages/pageNotFound/PageNotFound.jsx"),
      route("contact", "./pages/contact/ContactSent.jsx")
    ])
  ])
]
