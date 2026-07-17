// import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>davebreendev</h1>
      <div className={styles.navbar}>
        <div className={styles.leftNav}>
          <p><a href="#whoami">Hello World</a></p>
          <p><a href="#education">Education</a></p>
          <p><a href="#employment">Employment</a></p>
        </div>
        <div className={styles.rightNav}>
          <p><a href="#interests">Interests</a></p>
          <p><a href="#influences">Influences</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
    </div>
  )
}
