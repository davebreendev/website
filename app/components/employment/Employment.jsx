import { Link } from 'react-router';
import { getCentralImageUrl } from '../../utils/imageResolver';
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
              <h3 style={{ backgroundImage: `url(${getCentralImageUrl(employer.img)})` }}>{employer.name}</h3>
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
              <div className={styles.siteLink}>
                <Link to={`/employment#${employer.name}`} className={styles.siteLinkRef}>Read More</Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
