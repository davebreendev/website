import { Link, useRouteLoaderData } from 'react-router';
import Employment from '../../components/employment/Employment';

import styles from './EmploymentHome.module.css';

export default function EmploymentHome() {
  const { employers, jobs } = useRouteLoaderData("app-layout");
  return (
    <>
      <Employment
        employers={employers}
        jobs={jobs} />
      <Link
        to='/'
        className={styles.returnHome}
      >
        Back to Home
      </Link>
    </>
  );
}
