import { Link, useRouteLoaderData } from 'react-router';
import Education from './Education';

import styles from './EducationHome.module.css';

export default function EducationHome() {
  const { education } = useRouteLoaderData("app-layout");
  return (
    <>
      <div className={styles.contactReceived}>
        <Education
          education={education} />
        <Link
          to='/'
          className={styles.returnHome}
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
