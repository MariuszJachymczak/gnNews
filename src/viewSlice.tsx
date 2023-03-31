import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ViewState {
  viewMode: string;
}
const initialState: ViewState = {
  viewMode: "list",
};
export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<string>) => {
      state.viewMode = action.payload;
    },
  },
});

export const { setViewMode } = viewSlice.actions;

export default viewSlice.reducer;
