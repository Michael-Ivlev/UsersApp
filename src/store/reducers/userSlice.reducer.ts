import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { pullAt } from "lodash";

interface userType {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  location: {
    country: string;
    city: string;
    street: string;
  };
  id: string;
  imageUrl: string;
}

const initialState = [
  {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    location: { country: "", city: "", street: "" },
    id: "",
    imageUrl: "",
  },
] as userType[];

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    initialUsers(state, action: PayloadAction<userType[]>) {
      return action.payload;
    },
    addUser(state, action: PayloadAction<userType>) {
      state.push(action.payload);
    },
    removeUser(state, action: PayloadAction<string>) {
      const index = state.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        pullAt(state, index);
      }
    },
  },
});

export const { addUser, removeUser, initialUsers } = usersSlice.actions;
export default usersSlice.reducer;
