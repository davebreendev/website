import { Outlet } from "react-router";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageNotFound from '../pageNotFound/PageNotFound';

export default function Root() {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}