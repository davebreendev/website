import { Link } from 'react-router';
import styles from './Employment.module.css';

export default function Employment({ employers, jobs }) {
  return (
    <>
      <div className={styles.employmentBanner} id="employment">
        <h2>&euro;mployment</h2>
      </div>
      <div className={styles.employment}>
        {employers.map((employer, index) => {
          return (
            <div className={styles.employer} key={index}>
              <h3>{employer.name}</h3>
              {jobs.map((job, index) => {
                if (job.employer_id === employer.id) {
                  return (
                    <div className={styles.job} key={index}>
                      <h4>{job.role} - {job.term}</h4>
                      <p>{job.description}</p>
                    </div>
                  )
                }
              })}
              {
                index === employers.length - 1 && (
                  <div className={styles.siteLink}>
                    <Link to='/employment' className={styles.siteLinkRef}>Employment Home</Link>
                  </div>
                )
              }
            </div>
          )
        })}
      </div>
    </>
  )
}
