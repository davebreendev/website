import { Link, useRouteLoaderData } from 'react-router';

import styles from './WhoamiHome.module.css';

export default function WhoamiHome() {
  const { whoami } = useRouteLoaderData("app-layout");
  const intro = whoami.introduction.split('\\n');
  return (
    <div className={styles.Whoami}>
      <div className={styles.whoami}>
        <div className={styles.whoamiContent}>
          <h2>{whoami.greeting}</h2>
          {intro.map((paragraph, index) => {
            return <p id={index} key={index}>{paragraph}</p>
          })}
        </div>
        <div className={styles.returnHome} >
          <Link
            to='/'
            className={styles.returnHomeLink}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}