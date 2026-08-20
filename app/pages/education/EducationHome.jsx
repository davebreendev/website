import { useState } from 'react';
import { Link, useRouteLoaderData } from 'react-router';

import { GalleryModal } from '../../components/portals/GalleryModal';
import { getCentralImageUrl } from '../../utils/imageResolver';

import styles from './EducationHome.module.css';

export default function EducationHome() {
  const [openGallery, setOpenGallery] = useState(false);
  // const [galleryTopic, setGalleryTopic] = useState("");
  const { education } = useRouteLoaderData("app-layout");

  const launchGallery = (topic) => {
    setOpenGallery(true);
    console.log(`Launching gallery for ${topic}`)
  }

  return (
    <div className={styles.Education}>
      <div className={styles.education}>
        {education.map((institution, index) => {
          const description = institution.description.split('\\n');
          return (
            <div className={styles.institution} key={index}>
              <div className={styles.institutionPanel}>
                <div className={styles.institutionDetails}>
                  <h2>{institution.name}</h2>
                  <h3>{institution.attendance}</h3>
                </div>
                <div className={styles.institutionImage} style={{ backgroundImage: `url(${getCentralImageUrl(institution.img)})` }}>
                  <button
                    id="previous"
                    onClick={() => launchGallery(institution.name)}
                    className={styles.seeMoreButton}
                  >
                    See More
                  </button>
                </div>
              </div>
              <div className={styles.institutionDescription}>
                {description.map((paragraph, index) => {
                  return (
                    <p id={index} key={index}>{paragraph}</p>
                  )
                })}
              </div>
            </div>
          )
        })}
        <div className={styles.returnHome} >
          <Link
            to='/'
            className={styles.returnHomeLink}
          >
            Back to Home
          </Link>
        </div>
      </div>
      <GalleryModal
        openGallery={openGallery}
        onClose={() => setOpenGallery(false)}
        titleId={'Testing Modal'}
        children={<h1>MODAL CONTENT</h1>}
      />
    </div>
  );
}
