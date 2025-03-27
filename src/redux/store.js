import { configureStore } from '@reduxjs/toolkit';

const rootReducer = (
  state = {
    contacts: {
      items: [],
    },
    filters: {
      name: '',
    },
  }
) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
