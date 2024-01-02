import { createSlice } from "@reduxjs/toolkit";

export interface UiStateStructure {
  isCVActive: boolean;
  isThemeLight: boolean;
}

export const uiInitialState: UiStateStructure = {
  isThemeLight: false,
  isCVActive: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    switchCVPdf: (currentUistate: UiStateStructure) => ({
      ...currentUistate,
      isCVActive: !currentUistate.isCVActive,
    }),
    switchColorTheme: (currentUistate: UiStateStructure) => ({
      ...currentUistate,
      isThemeLight: !currentUistate.isThemeLight,
    }),
  },
});

export const {
  switchCVPdf: switchCVPdfActionCreator,
  switchColorTheme: switchColorThemeActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
