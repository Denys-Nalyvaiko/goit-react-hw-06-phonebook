import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      return [{ id: nanoid(), ...action.payload }, state.contacts];
    },

    removeContact(state, action) {
      return state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
