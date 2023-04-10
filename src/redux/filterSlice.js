import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  name: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,

  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setNameFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
