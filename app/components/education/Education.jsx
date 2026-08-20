import { Link } from 'react-router';

import { getCentralImageUrl } from '../../utils/imageResolver';

import styles from './Education.module.css';

export default function Education({ education }) {
  return (
    <>
      <div className={styles.educationBanner} id="education">
        <h2>Education</h2>
      </div>
      <div className={styles.education}>
        {education.map((institution, index) => {
          return (
            <div className={styles.institution} key={index}>
              <div className={styles.institutionImage}>
                <img
                  src={getCentralImageUrl(institution.img)} />
              </div>
              <div className={styles.institutionLabel}>
                <h2>{institution.name}</h2>
                <h3>{institution.attendance}</h3>
                {
                  index === education.length - 1 && (
                    <div className={styles.siteLink} >
                      <Link to='/education' className={styles.siteLinkRef}>Education Home</Link>
                    </div>
                  )
                }
              </div>
            </div>
          );
        })}
      </div >
    </>
  )
}
