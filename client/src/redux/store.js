import { configureStore } from "@reduxjs/toolkit";
import { doctorReducer } from "./slices/doctorSlice";
import { reservationReducer } from "./slices/reservationSlice";

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    reservation: reservationReducer,
  },
});

export default store;
