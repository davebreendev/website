import styles from './Employment.module.css';

export default function Employment({ employment }) {
  return (
    <>
      <div className={styles.employmentBanner} id="employment">
        <h2>&euro;mployment</h2>
      </div>
      <div className={styles.employment}>
        {employment.map((employer) => {
          return (
            <div className={styles.employer} key={employment.indexOf(employer)}>
              <h3>{employer.name}</h3>
              {employer.jobs.map((job) => {
                return (
                  <div className={styles.job} key={employer.jobs.indexOf(job)}>
                    <h4>{job.role} - {job.term}</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum
                    </p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}