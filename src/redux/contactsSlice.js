import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

const addContactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      const existingContact = state.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (existingContact) {
        alert(`${action.payload.name} is already in contacts!`);
        return;
      }
      state.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = addContactSlice.actions;
export const contactsReducer = addContactSlice.reducer;
