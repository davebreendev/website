import Whoami from '../whoami/Whoami';
import Education from '../education/Education';
import Employment from '../employment/Employment';
import Interests from '../interests/Interests';
// import Influences from '../influences/Influences';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

export default function Main() {
  return (
    <>
      <Whoami />
      <Education />
      <Employment />
      <Interests />
      {/* <Influences /> */}
      <Contact />
      <Footer />
    </>
  )
}
