import { Link, Outlet, useLoaderData, useLocation } from 'react-router';
import { getCentralImageUrl } from '../../utils/imageResolver';
import styles from './EducationHome.module.css';

export default function EducationHome() {
  const { education } = useLoaderData();
  const location = useLocation();

  return (
    <div className={styles.Education}>
      <div className={styles.education}>
        {education.map((institution) => {
          const description = institution.description.split('\\n');
          return (
            <div className={styles.institution} key={institution.name}>
              <div className={styles.institutionPanel}>
                <div className={styles.institutionDetails}>
                  <h2>{institution.name}</h2>
                  <h3>{institution.attendance}</h3>
                </div>
                <div className={styles.institutionImage} style={{ backgroundImage: `url(${getCentralImageUrl(institution.img)})` }}>
                  <Link
                    to={`gallery/${institution.name}`}
                    className={styles.seeMoreButton}
                    state={{ backgroundLocation: location }}
                  >
                    See More
                  </Link>
                </div>
              </div>
              <div className={styles.institutionDescription}>
                {description.map((paragraph, index) => {
                  return (
                    <p id={index} key={index}>{paragraph}</p>
                  )
                })}
              </div>
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
