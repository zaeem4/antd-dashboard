import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  permissions: {},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.permissions = action.payload.permissions;
    },
    resetUser: (state) => {
      state.name = null;
      state.email = null;
      state.permissions = {};
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
