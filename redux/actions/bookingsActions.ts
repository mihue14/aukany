import { booking } from "./../../utils/booking";
import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_ALL_BOOKINGS,
  GET_BOOKINGS,
  GET_BOOKINGS_BY_DATE,
  GET_BOOKINGS_BY_LASTNAME,
  GET_BOOKINGS_BY_NAME,
  GET_BOOKINGS_BY_SERVICE,
} from "../types";
import { dateFormate } from "../../utils/date";

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
  (date: string, name?: string, lastname?: string, service?: string) =>
  async (dispatch: Dispatch) => {
    date = dateFormate(date);

    return dispatch({
      type: GET_BOOKINGS_BY_DATE,
      payload: { date, name, lastname, service },
    });
  };

export const getBookingsByName =
  (name: string, lastname?: string, date?: string, service?: string) =>
  async (dispatch: Dispatch) => {
    return dispatch({
      type: GET_BOOKINGS_BY_NAME,
      payload: { name, lastname, date, service },
    });
  };

export const getBookingsByLastname =
  (lastname: string, name?: string, date?: string, service?: string) =>
  async (dispatch: Dispatch) => {
    return dispatch({
      type: GET_BOOKINGS_BY_LASTNAME,
      payload: { lastname, name, date, service },
    });
  };

export const getBookingsByService =
  (service: string, lastname?: string, name?: string, date?: string) =>
  async (dispatch: Dispatch) => {
    return dispatch({
      type: GET_BOOKINGS_BY_SERVICE,
      payload: { service, lastname, name, date },
    });
  };
