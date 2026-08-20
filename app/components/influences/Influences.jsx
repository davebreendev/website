import { useState } from "react";
import { Link } from 'react-router';
import { getCentralImageUrl } from '../../utils/imageResolver';

import styles from './Influences.module.css';

export default function Influences({ influences, resources }) {
  const [influenceIndex, setInfluenceIndex] = useState(0);
  const influence = influences[influenceIndex];

  const loadPrev = () => {
    if (influenceIndex > 0) {
      setInfluenceIndex((prev) => prev - 1);
    }
  }

  const loadNext = () => {
    if (influenceIndex < influences.length - 1) {
      setInfluenceIndex((prev) => prev + 1);
    }
  }

  return (
    <>
      <div className={styles.influencesBanner} id="influences">
        <h2>Influences</h2>
      </div>
      <div className={styles.influences}>
        <div
          className={styles.influence}
          style={{ backgroundImage: `url(${getCentralImageUrl(influence.img)})` }}
        >
          <button
            id="previous"
            onClick={loadPrev}
            disabled={influenceIndex === 0}
          >
            &lt;&lt;&lt;
          </button>

          <div className={styles.influenceLabel} id="influence-label">
            {/* 
            Future Page Route hook: wrapping the title in an anchor tag 

            <h2>
              <a href={`/influences/${influence.id}`} className={styles.routeLink}>
                {influence.name}
              </a>
            </h2>

            */}
            <h2>{influence.name}</h2>
            <p>{influence.subject}</p>

            <ul>
              {resources.filter((resource) => resource.influence_id === influence.id)
                .map((resource, index) => (
                  <li key={index}>
                    <Link to={resource.url}>{resource.name}</Link>
                    <p>{resource.details}</p>
                  </li>
                ))
              }
            </ul>
            {
              influenceIndex === influences.length - 1 && (
                <div className={styles.siteLink}>
                  <Link to='/influences' className={styles.siteLinkRef}>Influences Home</Link>
                </div>
              )
            }
          </div>

          <button
            id="next"
            onClick={loadNext}
            disabled={influenceIndex >= influences.length - 1}
          >
            &gt;&gt;&gt;
          </button>
        </div>
      </div>
    </>
  );
}