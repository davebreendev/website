import { Link } from 'react-router';

import styles from './ContactSent.module.css';

export default function ContactSent() {
  return (
    <>
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
