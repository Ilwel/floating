import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from './features/vehicleSlice'
import screenReducer from './features/screenSlice'

export const store = configureStore({
  reducer: {
    vehicleReducer,
    screenReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;