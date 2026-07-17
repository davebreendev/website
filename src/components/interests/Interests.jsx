import styles from './Interests.module.css';
import interest from '../../assets/images/projector.jpg';

export default function Interests() {
  return (
    <>
      <div className={styles.interestsBanner} id="interests">
        <h2>Interests</h2>
      </div>
      <div className={styles.interests}>
        <div className={styles.interest}>
          <div className={styles.interestLabel}>
            <h3>Interest H3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum</p>
          </div>
          <div className={styles.interestImage}>
            <img src={interest} />
          </div>
        </div>
        <div className={styles.interest}>
          <div className={styles.interestImage}>
            <img src={interest} />
          </div>
          <div className={styles.interestLabel}>
            <h3>Interest H3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum</p>
          </div>
        </div>
        <div className={styles.interest}>
          <div className={styles.interestLabel}>
            <h3>Interest H3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum</p>
          </div>
          <div className={styles.interestImage}>
            <img src={interest} />
          </div>
        </div>
        <div className={styles.interest}>
          <div className={styles.interestImage}>
            <img src={interest} />
          </div>
          <div className={styles.interestLabel}>
            <h3>Interest H3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum</p>
          </div>
        </div>
        <div className={styles.interest}>
          <div className={styles.interestLabel}>
            <h3>Interest H3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum</p>
          </div>
          <div className={styles.interestImage}>
            <img src={interest} />
          </div>
        </div>
      </div>
    </>
  )
}