import { Link } from 'react-router';

import { getCentralImageUrl } from '../../utils/imageResolver';

import styles from './Interests.module.css';

export default function Interests({ interests }) {
  return (
    <>
      <div className={styles.interestsBanner} id="interests">
        <h2>Interests</h2>
      </div>
      <div className={styles.interests}>
        {interests.map((interest, index) => {
          if (index % 2 === 0) {
            return (
              <div className={styles.interest} key={index}>
                <div className={styles.interestLabel}>
                  <h3>{interest.name}</h3>
                  <p>{interest.subject}</p>
                </div>
                <div className={styles.interestImage}>
                  <img src={getCentralImageUrl(interest.img)} />
                  {
                    index === interests.length - 1 && (
                      <div className={styles.siteLink}>
                        <Link to='/interests' className={styles.siteLinkRef}>Interests Home</Link>
                      </div>
                    )
                  }
                </div>
              </div>
            );
          }
          else {
            return (
              <div className={styles.interest} key={index}>
                <div className={styles.interestImage}>
                  <img src={getCentralImageUrl(interest.img)} />
                </div>
                <div className={styles.interestLabel}>
                  <h3>{interest.name}</h3>
                  <p>{interest.subject}</p>
                  {
                    index === interests.length - 1 && (
                      <div className={styles.siteLink}>
                        <Link to='/interests' className={styles.siteLinkRef}>Interests Home</Link>
                      </div>
                    )
                  }
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  )
}
