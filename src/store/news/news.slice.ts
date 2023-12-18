import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { search } from "./news.actions";
import { sortBySelectOption } from "@/components/screens/home/search-bar/SearchBarCard";


export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    isLoading: false,
    error: null as unknown as SerializedError,
    sortBy: 'relevance',
    perPage: 10,
    news: [],
  },
  reducers: {
    changeSortBy(state, { payload: sortBy }: { payload: sortBySelectOption }) {
      state.sortBy = sortBy;
    },
    changePerPage(state, { payload: perPage }: { payload: number }) {
      state.perPage = perPage;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(search.pending, state => {
        state.isLoading = true
      })
      .addCase(search.fulfilled, (state, { payload }) => {
        state.isLoading = false

        state.news = payload.response.results
      })
      .addCase(search.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
  }
})




export const { actions, reducer } = newsSlice

