import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface User {
  id: string;
  name: string;
}

type Users = User[];

const initialState: Users = [
  { id: "0", name: "Dude Lebowski" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Dave Gray" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users;

export const usersReducer = usersSlice.reducer;
