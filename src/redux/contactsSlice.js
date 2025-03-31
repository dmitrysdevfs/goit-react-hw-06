import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },

    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;

// export const addContact = createAction('contacts/addContact');

// export const deleteContact = createAction('contacts/deleteContact');

// const initialState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// export default function contactsSliceReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };

//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         items: state.items.filter(contact => contact.id !== action.payload),
//       };

//     default:
//       return state;
//   }
// }
