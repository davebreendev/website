import { layout, route, index } from "@react-router/dev/routes";

export default [
  layout("./layouts/appLayout.jsx", { id: "app-layout" }, [
    route("/", "./components/root/Root.jsx", [
      index("./routes/home.jsx"),
      route("education", "./components/education/EducationHome.jsx"),
      route("contact", "./components/contact/ContactSent.jsx"),
      route("*", "./components/pageNotFound/PageNotFound.jsx"),
    ])
  ])
]
