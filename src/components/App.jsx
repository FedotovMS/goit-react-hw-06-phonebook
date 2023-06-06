import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './app.module.css';

export default function App() {
  return (
    <div className={css.box}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>

      <div>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
