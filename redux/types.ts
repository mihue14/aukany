export const GET_ALL_BOOKINGS = "GET_ALL_BOOKINGS";
export const GET_BOOKINGS = "GET_BOOKINGS";
export const GET_BOOKINGS_BY_DATE = "GET_BOOKINGS_BY_DATE";

interface GetAllBookings {
  type: typeof GET_ALL_BOOKINGS;
  payload: [];
}

interface GetBookings {
  type: typeof GET_BOOKINGS;
  payload: [];
}

interface GetBookingsByDate {
  type: typeof GET_BOOKINGS_BY_DATE;
  payload: string;
}

export type BookingsDispatchTypes =
  | GetAllBookings
  | GetBookings
  | GetBookingsByDate;
