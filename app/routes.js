import { layout, route, index } from "@react-router/dev/routes";

export default [
  layout("./layouts/appLayout.jsx", { id: "app-data" }, [
    index("./routes/home.jsx"),
    route("whoami", "./routes/whoami.jsx"),
    route("education", "./routes/education.jsx"),
    route("employment", "./routes/employment.jsx"),
    route("influences", "./routes/influences.jsx"),
    route("interests", "./routes/interests.jsx"),
    route("*", "./pages/pageNotFound/PageNotFound.jsx"),
    route("contact", "./pages/contact/ContactSent.jsx")
  ])
]
