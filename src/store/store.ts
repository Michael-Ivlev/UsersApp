import { configureStore } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { usersApi } from "../api/users.api";
import usersReducer from "../api/reducers/userSlice.reducer";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    usersSlice: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
