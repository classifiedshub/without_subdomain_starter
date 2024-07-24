import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  onboardFormData: {},
};

const onboardSlice = createSlice({
  name: "onboard",
  initialState,
  reducers: {
    nextStep: (state, action) => {
      const maxSteps = action.payload;
      if (state.currentStep < maxSteps) state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep > 1) state.currentStep -= 1;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateOnboardFormData: (state, action) => {
      state.onboardFormData = {
        ...state.onboardFormData,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentStep, prevStep, nextStep, updateOnboardFormData } =
  onboardSlice.actions;
export default onboardSlice.reducer;
