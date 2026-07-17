import styles from './Education.module.css';

export default function Education({ education }) {
  return (
    <>
      <div className={styles.educationBanner} id="education">
        <h2>Education</h2>
      </div>
      <div className={styles.education}>
        {education.map((institution) => {
          return (
            <div className={styles.educationStage} key={education.indexOf(institution)} >
              <div className={styles.educationImage}>
                <img
                  src={institution.img} />
              </div>
              <div className={styles.educationLabel}>
                <h2>{institution.name}</h2>
                <h3>{institution.attendance}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}