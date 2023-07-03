import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NewsInfo } from '../../api/news/types';
import { fetchNews } from './thunk';
import { NEWS_PER_PAGE } from '../../api/news/constants';

type NewsState = {
  newsList: (NewsInfo | null)[]; // null -> loading
  error: string | null;
};

const initialState: NewsState = {
  newsList: [],
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addLoadingNews: (state, { payload }: PayloadAction<{ newsList: NewsInfo[] }>) => {
      const { newsList } = payload;
      state.newsList = [...state.newsList, ...newsList];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchNews.pending, (state) => {
        state.newsList = new Array(NEWS_PER_PAGE).fill(null);
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.newsList = payload;
      })
      .addCase(fetchNews.rejected, (state, { payload }) => {
        state.error = String(payload);
      }),
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
