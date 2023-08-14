import { postsApi } from './reducers/posts';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: combineReducers({
        [postsApi.reducerPath]: postsApi.reducer,
    }),
    middleware: ((getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat(postsApi.middleware)) as any as undefined,
});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
