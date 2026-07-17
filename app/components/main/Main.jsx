import Whoami from '../whoami/Whoami';
import Education from '../education/Education';
import Employment from '../employment/Employment';
import Interests from '../interests/Interests';
import Influences from '../influences/Influences';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

export default function Main({ whoami, education, employers, jobs, influences, resources, interests }) {
  return (
    <>
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
    </>
  )
}
