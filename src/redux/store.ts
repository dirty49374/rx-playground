import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from './uiReducer';

export const store = configureStore({
  reducer: {
    uiState: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

