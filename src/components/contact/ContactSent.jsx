import { Link } from 'react-router-dom';
import Header from "../header/Header";

import styles from './ContactSent.module.css';

export default function ContactSent() {
  return (
    <>
      <Header />
      <div className={styles.contactReceived}>
        <p>
          Thank you for contacting davebreendev.
        </p>
        <Link
          to='/'
          className={styles.returnHome}
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
