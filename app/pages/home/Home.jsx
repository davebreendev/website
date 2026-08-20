import Whoami from '../../components/whoami/Whoami';
import Education from '../../components/education/Education';
import Employment from '../../components/employment/Employment';
import Interests from '../../components/interests/Interests';
import Influences from '../../components/influences/Influences';
import Contact from '../../components/contact/Contact';

import styles from './Home.module.css';

export default function Home({ whoami, education, employers, jobs, influences, resources, interests }) {
  return (
    <div className={styles.Home}>
      <Whoami
        whoami={whoami} />
      <Education
        education={education}
      />
      <Employment
        employers={employers}
        jobs={jobs} />
      <Interests
        interests={interests}
      />
      <Influences
        influences={influences}
        resources={resources}
      />
      <Contact />
    </div>
  )
}
