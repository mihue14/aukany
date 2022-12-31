import { booking } from "./../../utils/booking";
import axios from "axios";
import { Dispatch } from "redux";
import { GET_ALL_BOOKINGS, GET_BOOKINGS, GET_BOOKINGS_BY_DATE } from "../types";

export const getAllBookings = () => async (dispatch: Dispatch) => {
  try {
    let {
      data: { allBookings },
    } = await axios.get("/api/booking");
    return dispatch({
      type: GET_ALL_BOOKINGS,
      payload: allBookings,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getBookings = (page: number) => async (dispatch: Dispatch) => {
  try {
    let {
      data: { bookings },
    } = await axios.get(`/api/booking?page=${page}`);

    return dispatch({
      type: GET_BOOKINGS,
      payload: bookings,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getBookingsByDate =
  (date: string) => async (dispatch: Dispatch) => {
    date = `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`;

    return dispatch({
      type: GET_BOOKINGS_BY_DATE,
      payload: date,
    });
  };
