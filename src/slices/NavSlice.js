/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: undefined,
  name: undefined,
  lastName: undefined,
  username: undefined,
  password: undefined,
  email: undefined,
};

export const NavSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setData(state, action) {
        return {
          ...state,
          ...action.payload,
        };
    },
  },
});

export const {setToken, setName, setLastName, setUsername, setPassword, setEmail, setData} = NavSlice.actions;

export const selectToken = (state) => state.nav.token;
export const selectName = (state) => state.nav.name;
export const selectLastName = (state) => state.nav.lastName;
export const selectUsername = (state) => state.nav.username;
export const selectPassword = (state) => state.nav.password;
export const selectEmail = (state) => state.nav.email;

export default NavSlice.reducer;
