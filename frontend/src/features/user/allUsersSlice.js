import { createSlice } from '@reduxjs/toolkit';
import { ALL_USERS_REQUEST, ALL_USERS_SUCCESS, ALL_USERS_FAIL, CLEAR_ERRORS } from "../../constants/userConstants"; // Import action types if needed

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ALL_USERS_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(ALL_USERS_SUCCESS, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(ALL_USERS_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

export default usersSlice.reducer;
