import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NewsInfo } from '../../api/news/types';
import { fetchNews } from './thunk';

type NewsState = {
  newsList: NewsInfo[];
  error: string | null;
  isLoading: boolean;
};

const initialState: NewsState = {
  newsList: [],
  error: null,
  isLoading: true,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNewsToList: (state, { payload }: PayloadAction<{ newsList: NewsInfo[] }>) => {
      const { newsList } = payload;
      state.newsList = [...state.newsList, ...newsList];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.newsList = payload;
      })
      .addCase(fetchNews.rejected, (state, { payload }) => {
        state.error = String(payload);
      }),
});

export const { addNewsToList } = newsSlice.actions;
export default newsSlice.reducer;
