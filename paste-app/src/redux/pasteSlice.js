import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pastes: JSON.parse(localStorage.getItem("pastes")) || [],
};

const pasteSlice = createSlice({
  name: "paste",
  initialState,

  reducers: {
    addPaste: (state, action) => {
      state.pastes.unshift(action.payload);

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      );
    },

    deletePaste: (state, action) => {
      state.pastes = state.pastes.filter(
        (paste) => paste.id !== action.payload
      );

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      );
    },

    updatePaste: (state, action) => {

      const index = state.pastes.findIndex(
        (paste) => paste.id === action.payload.id
      );

      state.pastes[index] = action.payload;

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      );
    },
  },
});

export const {
  addPaste,
  deletePaste,
  updatePaste,
} = pasteSlice.actions;

export default pasteSlice.reducer;