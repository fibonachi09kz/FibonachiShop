import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_ENDPOINT } from "../../constants/API";
import { IProduct } from "../../types/product.types";

interface IProductResponse {
  next: number;
  result: {
    elements: IProduct[];
  };
  time: {
    date_finish: string;
    date_start: string;
    duration: number;
    finish: number;
    processing: number;
    start: number;
  };
  total: number;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductResponse, {}>({
      query: (params) => "/iblock.Element.list" + params,
    }),
  }),
});

export const { useGetProductsQuery } = api;
