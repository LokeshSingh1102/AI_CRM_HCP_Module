import { configureStore } from "@reduxjs/toolkit";
import interactionReducer from "./interactionSlice";

export const store = configureStore({
  reducer: {
    interaction: interactionReducer,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;