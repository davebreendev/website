import { Link, useLoaderData } from 'react-router';
import Interests from '../../components/interests/Interests';

import styles from './InterestsHome.module.css';

export default function InterestsHome() {
  const { interests } = useLoaderData();
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
