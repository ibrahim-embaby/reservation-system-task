import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: [],
    loading: false,
  },
  reducers: {
    setDoctors(state, action) {
      state.doctors = action.payload;
    },
    addDcotor(state, action) {
      state.doctors = [...state.doctors, action.payload];
    },
    removeDoctor(state, action) {
      state.doctors = state.doctors.filter(
        (doctor) => doctor._id !== action.payload
      );
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
  },
});

const doctorActions = doctorSlice.actions;
const doctorReducer = doctorSlice.reducer;

export { doctorActions, doctorReducer };
