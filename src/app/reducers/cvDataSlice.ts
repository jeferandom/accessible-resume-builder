import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CvDataState {
  markDown: string;
}

const initialState: CvDataState = {
  markDown: "",
};

const cvDataSlice = createSlice({
  name: "cvData",
  initialState,
  reducers: {
    setMarkDown: (state, action: PayloadAction<string>) => {
      state.markDown = action.payload;
    },
  },
});

export const { setMarkDown } = cvDataSlice.actions;

export default cvDataSlice.reducer;
