import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservations: [],
    todaySessions: [],
    loading: false,
  },
  reducers: {
    setReservations(state, action) {
      state.reservations = action.payload;
    },
    addReservation(state, action) {
      state.reservations = [...state.reservations, action.payload];
    },
    setTodaySessions(state, action) {
      state.todaySessions = action.payload;
    },
    addTodaySession(state, action) {
      state.todaySessions = [...state.todaySessions, action.payload];
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
  },
});

const reservationActions = reservationSlice.actions;
const reservationReducer = reservationSlice.reducer;

export { reservationActions, reservationReducer };
