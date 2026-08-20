import { NavLink } from 'react-router';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1><NavLink to="/">davebreendev</NavLink></h1>
      <div className={styles.navbar}>
        <div className={styles.leftNav}>
          <p><NavLink to="/whoami" style={({ isActive }) => ({
            color: isActive ? "rgba(165, 163, 163, 0.73)" : "white"
          })}>Hello World</NavLink></p>
          <p><NavLink to="/education" style={({ isActive }) => ({
            color: isActive ? "rgba(165, 163, 163, 0.73)" : "white"
          })}>Education</NavLink></p>
          <p><NavLink to="/employment" style={({ isActive }) => ({
            color: isActive ? "rgba(165, 163, 163, 0.73)" : "white"
          })}>Employment</NavLink></p>
        </div>
        <div className={styles.rightNav}>
          <p><NavLink to="/interests" style={({ isActive }) => ({
            color: isActive ? "rgba(165, 163, 163, 0.73)" : "white"
          })}>Interests</NavLink></p>
          <p><NavLink to="/influences" style={({ isActive }) => ({
            color: isActive ? "rgba(165, 163, 163, 0.73)" : "white"
          })}>Influences</NavLink></p>
          <p><NavLink to="/contact" style={({ isActive }) => ({
            color: isActive ? "rgba(165, 163, 163, 0.73)" : "white"
          })}>Contact</NavLink></p>
        </div>
      </div>
    </div>
  )
}
