import { Link, useRouteLoaderData } from 'react-router';
import Interests from '../../components/interests/Interests';

import styles from './InterestsHome.module.css';

export default function InterestsHome() {
  const { interests } = useRouteLoaderData("app-layout");
  return (
    <>
      <Interests
        interests={interests} />
      <Link
        to='/'
        className={styles.returnHome}
      >
        Back to Home
      </Link>
    </>
  );
}
