import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { InteractionState } from "../types/interaction";

const initialState: InteractionState = {
  id: "",
  hcp_name: "",
  interaction_type: "",
  topics: "",
  sentiment: "neutral",
};

const slice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    setInteraction: (state, action: PayloadAction<Partial<InteractionState>>) => {
      return { ...state, ...action.payload };
    },
    resetInteraction: () => initialState,
  },
});

export const { setInteraction, resetInteraction } = slice.actions;
export default slice.reducer;