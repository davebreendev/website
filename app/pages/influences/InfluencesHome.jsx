import { Link, useRouteLoaderData } from 'react-router';
import Influences from '../../components/influences/Influences';

import styles from './InfluencesHome.module.css';

export default function InfluencesHome() {
  const { influences, resources } = useRouteLoaderData("app-layout");
  return (
    <>
      <Influences
        influences={influences}
        resources={resources} />
      <Link
        to='/'
        className={styles.returnHome}
      >
        Back to Home
      </Link>
    </>
  );
}
