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
            <div className={styles.educationStage} key={index} >
              <div className={styles.educationImage}>
                <img
                  src={getCentralImageUrl(institution.img)} />
              </div>
              <div className={styles.educationLabel}>
                <h2>{institution.name}</h2>
                <h3>{institution.attendance}</h3>
              </div>
              {
                index === education.length - 1 && (
                  <div className={styles.educationBanner}>
                    <div className={styles.educationHomeLink} >
                      <a href='/education'>Go to Education Home</a>
                    </div>
                  </div>
                )
              }
            </div>
          );
        })}
      </div>
    </>
  )
}
