import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ item: { name, number } }) {
  return (
    <div className={css.container}>
      <div className={css.wrapperInfo}>
        <div className={css.contactInfo}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.contactInfo}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button>Delete</button>
    </div>
  );
}
