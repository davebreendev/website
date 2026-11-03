import { Outlet } from "react-router";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageNotFound from '../pages/pageNotFound/PageNotFound';

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}