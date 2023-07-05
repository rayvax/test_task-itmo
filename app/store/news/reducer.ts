import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NewsInfo } from '../../api/news/types';
import { fetchNews } from './thunk';
import { AppLocale } from '../../../locale/types';

type NewsState = {
  newsLists: { [key in AppLocale]?: NewsInfo[] };
  error: string | null;
  isLoading: boolean;
};

const initialState: NewsState = {
  newsLists: {},
  error: null,
  isLoading: true,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNewsToList: (
      state,
      { payload }: PayloadAction<{ locale: AppLocale; newsList: NewsInfo[] }>,
    ) => {
      const { newsList, locale } = payload;

      const stateNewsList = state.newsLists[locale] ?? [];
      state.newsLists[locale] = [...stateNewsList, ...newsList];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        const { newsList, locale } = payload;

        state.newsLists[locale] = newsList;
      })
      .addCase(fetchNews.rejected, (state, { payload }) => {
        state.error = String(payload);
      }),
});

export const { addNewsToList } = newsSlice.actions;
export default newsSlice.reducer;
