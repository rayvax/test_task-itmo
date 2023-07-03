import { configureStore } from '@reduxjs/toolkit';

import newsReducer from './news/reducer';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;
