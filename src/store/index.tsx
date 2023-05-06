import {configureStore} from '@reduxjs/toolkit';

import templateReducer from './slices/tempate/templateSlice';

export const store = configureStore({
  reducer: {
    template: templateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
