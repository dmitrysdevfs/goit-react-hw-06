import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export default slice.reducer;

export const { changeFilter } = slice.actions;

// export const changeFilter = createAction('filters/changeFilter');

// const initialState = {
//   name: '',
// };

// export default function filterSliceReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'filters/changeFilter':
// return {
//   ...state,
//   name: action.payload,
// };

//     default:
//       return state;
//   }
// }
