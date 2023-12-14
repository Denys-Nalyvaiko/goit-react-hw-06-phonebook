import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  list: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      return { list: [{ id: nanoid(), ...action.payload }, ...state.list] };
    },

    removeContact(state, action) {
      return { list: state.list.filter(({ id }) => id !== action.payload) };
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
