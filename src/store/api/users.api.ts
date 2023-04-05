import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../../types/api.type";
import { initialUsers } from "../reducers/userSlice.reducer";

const API_URL = "https://randomuser.me/api";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getUsers: build.query<ApiResponse, {}>({
      query: () => "?results=10",
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        const formatedData = data.results.map((user) => {
          return {
            title: user.name.title,
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email,
            location: {
              country: user.location.country,
              city: user.location.city,
              street: user.location.street.name,
            },
            id: user.login.uuid,
            imageUrl: user.picture.large,
          };
        });
        dispatch(initialUsers(formatedData));
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
