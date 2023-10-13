import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,

  reducers: {
    getEmail: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getEmail } = emailSlice.actions;
export default emailSlice.reducer;
