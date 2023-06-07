import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { envVars } from "../constants/envVars";
import { BaseResponse } from "../../@types";
import { setHeaders } from "../../lib/utils/setHeaders";

export interface ICreateUser {
  name: string;
  email: string;
  key: string;
  secret: string;
}

export interface ICreateBook {
  isbn: string;
}

export interface IBook {
  id: number;
  isbn: string;
  title: string;
  cover: string;
  author: string;
  published: number;
  pages: number;
}

export interface IBookResponse {
  book: IBook;
  status: number;
}

export type IBookSearchResponse = Omit<IBook, "id" | "pages">;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: envVars.baseURL,
  }),
  tagTypes: ["BOOKS", "SEARCH"],
  endpoints: (builder) => ({
    /* -------------------------------------------------------------------------------------------------- */
    /* Auth APIs BEGIN*/
    signUp: builder.mutation<
      BaseResponse<ICreateUser & { id: number }>,
      ICreateUser
    >({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body,
      }),
    }),

    getMe: builder.mutation<BaseResponse<ICreateUser & { id: number }>, void>({
      query: () => ({
        url: "myself",
        method: "GET",
        headers: setHeaders("GET", "myself"),
      }),
    }),
    /* Auth APIs END*/
    /* -------------------------------------------------------------------------------------------------- */
    /* Book APIs BEGIN */
    getAllBooks: builder.query<BaseResponse<IBookResponse[]>, void>({
      query: () => ({
        url: "books",
        headers: setHeaders("GET", "books"),
      }),
      providesTags: ["BOOKS"],
    }),

    createBook: builder.mutation<BaseResponse, ICreateBook>({
      query: (body) => ({
        url: "books",
        body,
        method: "POST",
        headers: setHeaders("POST", "books", body),
      }),
      invalidatesTags: ["BOOKS"],
    }),

    searchBooks: builder.query<BaseResponse<IBookSearchResponse[]>, string>({
      query: (title) => ({
        url: `books/${title}`,
        headers: setHeaders("GET", `books/${title}`, {}),
      }),
      providesTags: ["SEARCH"],
    }),
    /* Book APIs END */
    /* -------------------------------------------------------------------------------------------------- */
  }),
});

export const {
  useSignUpMutation,
  useGetMeMutation,
  useCreateBookMutation,
  useGetAllBooksQuery,
  useSearchBooksQuery,
} = api;
