import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  list: [],
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['list'],
};

const contactsSlice = createSlice({
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
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
