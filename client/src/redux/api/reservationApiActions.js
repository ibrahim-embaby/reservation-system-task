import { toast } from "react-toastify";
import { reservationActions } from "../slices/reservationSlice";
import axios from "axios";
import { apiUrl, days } from "../../utils/constants";

export function createReservation(reservation) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${apiUrl}/reservations`, reservation);
      toast.success(data?.message);
      dispatch(reservationActions.addReservation(data.data));

      const todayDate = new Date();
      const sessionDate = new Date(data.data.selectedDate);
      const isSessionToday =
        days[todayDate.getDay()] === days[sessionDate.getDay()];

      if (isSessionToday) {
        dispatch(reservationActions.addTodaySession(data.data));
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error, please try again");
      }
    }
  };
}

export function fetchReservations() {
  return async (dispatch) => {
    try {
      dispatch(reservationActions.setLoading());
      const { data } = await axios.get(`${apiUrl}/reservations`);
      dispatch(reservationActions.setReservations(data.data));
      dispatch(reservationActions.clearLoading());
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error, please try again");
      }
      dispatch(reservationActions.clearLoading());
    }
  };
}

export function fetchTodaySessions() {
  return async (dispatch) => {
    try {
      dispatch(reservationActions.setLoading());
      const { data } = await axios.get(`${apiUrl}/reservations/today`);
      dispatch(reservationActions.setTodaySessions(data.data));
      dispatch(reservationActions.clearLoading());
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error, please try again");
      }
      dispatch(reservationActions.clearLoading());
    }
  };
}

export function deleteReservation(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${apiUrl}/reservations/${id}`);
      dispatch(reservationActions.removeReservation(data.data._id));
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error, please try again");
      }
    }
  };
}
