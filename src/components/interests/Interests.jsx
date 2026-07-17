import styles from './Interests.module.css';

export default function Interests({ interests }) {
  return (
    <>
      <div className={styles.interestsBanner} id="interests">
        <h2>Interests</h2>
      </div>
      <div className={styles.interests}>
        {interests.map((interest) => {
          if (interests.indexOf(interest) % 2 === 0) {
            return (
              <div className={styles.interest} key={interests.indexOf(interest)}>
                <div className={styles.interestLabel}>
                  <h3>{interest.name}</h3>
                  <p>{interest.subject}</p>
                </div>
                <div className={styles.interestImage}>
                  <img src={interest.img} />
                </div>
              </div>
            );
          }
          else {
            return (
              <div className={styles.interest} key={interests.indexOf(interest)}>
                <div className={styles.interestImage}>
                  <img src={interest.img} />
                </div>
                <div className={styles.interestLabel}>
                  <h3>{interest.name}</h3>
                  <p>{interest.subject}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  )
}