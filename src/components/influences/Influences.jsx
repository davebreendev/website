import styles from './Influences.module.css';
import { useState } from "react";

export default function Influences({ influences }) {

  const [influenceIndex, setInfluenceIndex] = useState(0);
  const [influence, setInfluence] = useState(influences[influenceIndex]);

  const loadPrev = () => {
    if (influenceIndex > 0) {
      setInfluenceIndex((influenceIndex) => influenceIndex - 1);
      setInfluence(influences[influenceIndex - 1]);
    }
  }

  const loadNext = () => {
    if (influenceIndex < influences.length - 1) {
      setInfluenceIndex((influenceIndex) => influenceIndex + 1);
      setInfluence(influences[influenceIndex + 1]);
    }
  }
  return (
    <>
      <div className={styles.influencesBanner} id="influences">
        <h2>Influences</h2>
      </div>
      <div className={styles.influences}>
        <div className={styles.influence} style={{ backgroundImage: `url(${influence.img})` }}>
          {
            influenceIndex === 0 ?
              <button id="previous" onClick={loadPrev} disabled>PREVIOUS</button>
              :
              <button id="previous" onClick={loadPrev}>PREVIOUS</button>
          }
          <div className={styles.influenceLabel} id="influence-label">
            <h2>{influence.name}</h2>
            <p>{influence.subject}</p>
            <ul>
              {influence.resources.map((resource) => {
                return (
                  <li key={influence.resources.indexOf(resource)}>{resource.name}: {resource.url}: {resource.details}</li>
                )
              })}
            </ul>
          </div>
          {
            influenceIndex < influences.length ?
              <button id="previous" onClick={loadNext}>NEXT</button>
              :
              <button id="next" onClick={loadNext} disabled>NEXT</button>
          }
        </div>
      </div>
    </>
  )
}