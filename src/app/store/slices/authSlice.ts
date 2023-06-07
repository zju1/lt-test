import { createSlice } from "@reduxjs/toolkit";
import { ICreateUser } from "../../api/api.service";

export interface IAuthSlice {
  user: (ICreateUser & { id: number }) | null;
  authenticated: boolean;
}

const initialState: IAuthSlice = {
  authenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (store, action) => {
      store.authenticated = action.payload.authenticated;
      store.user = action.payload.user;
    },
    logout: (store) => {
      store.authenticated = false;
      store.user = null;
    },
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
