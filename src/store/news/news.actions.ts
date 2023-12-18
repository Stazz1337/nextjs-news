import { newsServices } from "@/services/news.service";
import { sortBySelectOption } from "@/components/screens/home/search-bar/SearchBarCard";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const search = createAsyncThunk('search', async ({ query, sortBy, perPage }: {
  query: string, sortBy: sortBySelectOption, perPage: number
}, thunkApi) => {
  try {
    const response = await newsServices.search({ query, sortBy, perPage })


    return response
  } catch (error) {
    thunkApi.rejectWithValue({})
  }
})