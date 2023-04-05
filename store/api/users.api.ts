import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../../types/api.type";

const API_URL = "https://randomuser.me/api";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getUsers: build.query<ApiResponse, {}>({
      query: () => "?results=10",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
