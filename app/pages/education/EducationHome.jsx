import { Link, Outlet, useLoaderData } from 'react-router';
import { getCentralImageUrl } from '../../utils/imageResolver';
import styles from './EducationHome.module.css';

export default function EducationHome() {
  const { education } = useLoaderData();

  /*
  import { Outlet, useLoaderData, Link } from "react-router";
  import { prisma } from "~/.server/db";
  
  export async function loader() {
    /* Fetch data needed for the main Education page
    const institutions = await prisma.institution.findMany();
    return { institutions };
  }
  
  export default function EducationHome() {
    const { institutions } = useLoaderData();
  
    return (
      <div className="education-home">
        <h1>Education Directory</h1>
        
        <div className="institution-grid">
          {institutions.map((inst) => (
            <div key={inst.id} className="card">
              <h3>{inst.name}</h3>
              {/* Clicking this opens the modal by navigating to the child route }
              <Link to={`${inst.id}/gallery`}>
                <img src={inst.coverImage} alt={inst.name} />
              </Link>
            </div >
          ))}
        </div >
  
    {/* The GalleryModal will be injected here when the route matches :topic/gallery }
    < Outlet />
      </div >
    );
  }
  */
  return (
    <div className={styles.Education}>
      <div className={styles.education}>
        {education.map((institution, index) => {
          const description = institution.description.split('\\n');
          return (
            <div className={styles.institution} key={index}>
              <div className={styles.institutionPanel}>
                <div className={styles.institutionDetails}>
                  <h2>{institution.name}</h2>
                  <h3>{institution.attendance}</h3>
                </div>
                <div className={styles.institutionImage} style={{ backgroundImage: `url(${getCentralImageUrl(institution.img)})` }}>
                  <Link
                    to={`/gallery/${institution.name}`}
                    className={styles.seeMoreButton}
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
              <Outlet />
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
    </div>
  );
}
