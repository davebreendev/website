import { useNavigate } from 'react-router-dom';

import styles from './Contact.module.css';

export default function Contact() {

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/contact');
  }

  return (
    <div className={styles.contact} id="contact">
      <h3>davebreendev@gmail.com</h3>
      <form onSubmit={handleSubmit} method="POST">
        <div className={styles.name}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={styles.subject}>
          <label htmlFor="subject">Subject: </label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">email: </label>
          <input type="text" name="email" id="email" />
        </div>
        <div className={styles.message}>
          <label htmlFor="message" id="message-label">Message: </label>
          <br />
          <textarea id="message" name="message" rows="3" cols="40"></textarea>
        </div>
        <div className={styles.submit}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}
