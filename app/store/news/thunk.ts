import { createAsyncThunk } from '@reduxjs/toolkit';
import { NewsInfo } from '../../api/news/types';
import { AppLocale } from '../../../locale/types';

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ locale }: { locale: AppLocale }, { rejectWithValue }) => {
    try {
      const newsResp = await fetch(`http://localhost:3000/api/news?locale=${locale}`);
      const newsList: NewsInfo[] = await newsResp.json();

      await sleep(5000);

      return newsList;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
