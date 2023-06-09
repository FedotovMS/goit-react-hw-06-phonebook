import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name}: {contact.number}
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
