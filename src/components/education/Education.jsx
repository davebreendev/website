import styles from './Education.module.css';
import botticelli from '../../assets/images/Botticelli-The-Adoration-of-the-Magi-sepia.jpg';
import friedrich from '../../assets/images/Friedrich-Wanderer-Above-The-Sea-Of-Fog-sepia.jpg';
import delacroix from '../../assets/images/Delacroix-Liberty-Guiding-The-People-sepia.jpg';
import goya from '../../assets/images/Goya-The-Third-of-May-1808-sepia.jpg';

export default function Education() {
  return (
    <>
      <div className={styles.educationBanner} id="education">
        <h2>Education</h2>
      </div>
      <div className={styles.education}>
        <div className={styles.educationStage}>
          <div className={styles.educationImage}>
            <img
              src={botticelli} />
          </div>
          <div className={styles.educationLabel}>
            <h2>Education H2</h2>
            <h3>Attended</h3>
          </div>
        </div>
        <div className={styles.educationStage}>
          <div className={styles.educationImage}>
            <img
              src={friedrich} />
          </div>
          <div className={styles.educationLabel}>
            <h2>Education H2</h2>
            <h3>Attended</h3>
          </div>
        </div>
        <div className={styles.educationStage}>
          <div className={styles.educationImage}>
            <img
              src={delacroix} />
          </div>
          <div className={styles.educationLabel}>
            <h2>Education H2</h2>
            <h3>Attended</h3>
          </div>
        </div>
        <div className={styles.educationStage}>
          <div className={styles.educationImage}>
            <img
              src={goya} />
          </div>
          <div className={styles.educationLabel}>
            <h2>Education H2</h2>
            <h3>Attended</h3>
          </div>
        </div>
      </div>
    </>
  )
}
