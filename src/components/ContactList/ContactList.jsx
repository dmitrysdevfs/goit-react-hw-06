import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ items }) {
  return (
    <ul className={css.list}>
      {items.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact item={contact} />
        </li>
      ))}
    </ul>
  );
}
