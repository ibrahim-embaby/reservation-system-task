import { toast } from "react-toastify";
import { doctorActions } from "../slices/doctorSlice";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

export function createDoctor(doctor) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${apiUrl}/doctors`, doctor);
      dispatch(doctorActions.addDcotor(data.data));
      toast.success(data?.message);
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

export function fetchDoctors() {
  return async (dispatch) => {
    try {
      dispatch(doctorActions.setLoading());
      const { data } = await axios.get(`${apiUrl}/doctors`);
      dispatch(doctorActions.setDoctors(data.data));
      dispatch(doctorActions.clearLoading());
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error, please try again");
      }
      dispatch(doctorActions.clearLoading());
    }
  };
}

export function deleteDoctor(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${apiUrl}/doctors/${id}`);
      dispatch(doctorActions.removeDoctor(data.data._id));
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
