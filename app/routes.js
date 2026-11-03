import { layout, route, index } from "@react-router/dev/routes";

export default [
  layout("./layouts/appLayout.jsx", { id: "app-data" }, [
    index("./routes/home.jsx"),
    route("whoami", "./routes/whoami.jsx", [
      route("gallery/:topic", "./routes/gallery.jsx", { id: "whoami-gallery" }),
    ]),
    route("education", "./routes/education.jsx", [
      route("gallery/:topic", "./routes/gallery.jsx", { id: "education-gallery" }),
    ]),
    route("employment", "./routes/employment.jsx", [
      route("gallery/:topic", "./routes/gallery.jsx", { id: "employment-gallery" }),
    ]),
    route("influences", "./routes/influences.jsx", [
      route("gallery/:topic", "./routes/gallery.jsx", { id: "influences-gallery" }),
    ]),
    route("interests", "./routes/interests.jsx", [
      route("gallery/:topic", "./routes/gallery.jsx", { id: "interests-gallery" }),
    ]),
    route("*", "./pages/pageNotFound/PageNotFound.jsx"),
    route("contact", "./pages/contact/ContactSent.jsx"),
  ])
]
