import { Link, Outlet, useLoaderData } from 'react-router';
import { getCentralImageUrl } from '../../utils/imageResolver';

import styles from './EmploymentHome.module.css';

export default function EmploymentHome() {
  const { employers, jobs } = useLoaderData();
  return (
    <div className={styles.Employment}>
      <div className={styles.employment}>
        {employers.map((employer, index) => {
        return (
          <div className={styles.employer} key={index} id={employer.name}>
            <h3 className={styles.employerLabel} style={{ backgroundImage: `url(${getCentralImageUrl(employer.img)})` }}>{employer.name}</h3>
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
          </div>
        )
        })}
        <div className={styles.returnHome} >
          <Link
            to='/'
            className={styles.returnHomeLink}
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
