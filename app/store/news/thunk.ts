import { createAsyncThunk } from '@reduxjs/toolkit';
import { NewsInfo } from '../../api/news/types';
import { AppLocale } from '../../../locale/types';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ locale }: { locale: AppLocale }, { rejectWithValue }) => {
    try {
      const newsResp = await fetch(`http://localhost:3000/api/news?locale=${locale}`);
      const newsList: NewsInfo[] = await newsResp.json();

      return { newsList, locale };
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
