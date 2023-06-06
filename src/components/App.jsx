import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { setFilter } from 'redux/filterSlice';
import { addContact, deleteContact } from 'redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const handleFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const formSubmitHandler = data => {
    const newContact = {
      name: data.name,
      number: data.number,
    };
    dispatch(addContact(newContact));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>

      <>
        <Filter filter={filter} onSearch={handleFilter} />
        <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      </>
    </div>
  );
}
