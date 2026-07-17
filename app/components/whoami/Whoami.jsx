import styles from './Whoami.module.css';

export default function Whoami({ whoami }) {
  const intro = whoami.introduction.split('-----');
  return (
    <>
      <span className="anchor" id="whoami">&nbsp;</span>
      <div className={styles.whoami}>
        <div className={styles.whoamiContent}>
          <h2>{whoami.greeting}</h2>
          {intro.map((paragraph, index) => {
            return <p id={index} key={index}>{paragraph}</p>
          })}
        </div>
      </div>
    </>
  )
}
