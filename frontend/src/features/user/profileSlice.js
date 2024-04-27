import { createSlice } from '@reduxjs/toolkit';
import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  CLEAR_ERRORS,
} from "../../constants/userConstants";

// Initial state
const initialState = {
  loading: false,
  isUpdated: false,
  isDeleted: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UPDATE_PROFILE_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(UPDATE_PROFILE_SUCCESS, (state) => {
        state.loading = false;
        state.isUpdated = true;
      })
      .addCase(UPDATE_PROFILE_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }).addCase(UPDATE_PROFILE_RESET,(state) => {
        state.isUpdated=false;
      })
      .addCase(UPDATE_PASSWORD_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(UPDATE_PASSWORD_SUCCESS, (state) => {
        state.loading = false;
        state.isUpdated = true;
      })
      .addCase(UPDATE_PASSWORD_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(UPDATE_USER_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(UPDATE_USER_SUCCESS, (state) => {
        state.loading = false;
        state.isUpdated = true;
      })
      .addCase(UPDATE_PASSWORD_RESET,(state) =>{
        state.isUpdated=false;
      })
      .addCase(UPDATE_USER_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(DELETE_USER_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(DELETE_USER_SUCCESS, (state) => {
        state.loading = false;
        state.isDeleted = true;
      })
      .addCase(DELETE_USER_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

// Export reducer
export default profileSlice.reducer;
