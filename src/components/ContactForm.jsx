import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../redux/contactsSlice';

const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newContact = {
      name: formData.get('name'),
      number: formData.get('number'),
    };

    dispatch(addContact(newContact));
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
