import Header from "../header/Header";
import { Outlet } from "react-router-dom";


import styles from './Root.module.css';

export default function Root() {
  return (
    <div className={styles.Root}>
      <Header />
      <Outlet />
    </div>
  )
}