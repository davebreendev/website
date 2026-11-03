import { useLoaderData } from 'react-router';
import Whoami from '../../components/whoami/Whoami';
import Education from '../../components/education/Education';
import Employment from '../../components/employment/Employment';
import Interests from '../../components/interests/Interests';
import Influences from '../../components/influences/Influences';
import Contact from '../../components/contact/Contact';

import styles from './Home.module.css';

export default function Home() {
  const homeData = useLoaderData();
  return (
    <div className={styles.Home}>
      <Whoami
        whoami={homeData.whoami} />
      <Education
        education={homeData.education}
      />
      <Employment
        employers={homeData.employers}
        jobs={homeData.jobs} />
      <Interests
        interests={homeData.interests}
      />
      <Influences
        influences={homeData.influences}
        resources={homeData.resources}
      />
      <Contact />
    </div>
  )
}
