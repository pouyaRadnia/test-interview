import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: combineReducers({}),
    middleware: ((getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat()) as any as undefined,
});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
