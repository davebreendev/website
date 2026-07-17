import Header from "../header/Header";
import Footer from "../footer/Footer";
import PageNotFound from '../pageNotFound/PageNotFound';
import { Outlet } from "react-router";

import { useRouteLoaderData } from "react-router";

import styles from './Root.module.css';

export default function Root() {
  const data = useRouteLoaderData("app-layout");

  if (!data) {
    return (
      <div className={styles.Root}>
        <Header />
        <PageNotFound />
        <Footer />
      </div>
    )
  }

  return (
    <div className={styles.Root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}