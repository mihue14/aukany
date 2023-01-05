export const GET_ALL_BOOKINGS = "GET_ALL_BOOKINGS";
export const GET_BOOKINGS = "GET_BOOKINGS";
export const GET_BOOKINGS_BY_DATE = "GET_BOOKINGS_BY_DATE";
export const GET_BOOKINGS_BY_NAME = "GET_BOOKINGS_BY_NAME";
export const GET_BOOKINGS_BY_LASTNAME = "GET_BOOKINGS_BY_LASTNAME";
export const GET_BOOKINGS_BY_SERVICE = "GET_BOOKINGS_BY_SERVICE";

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
  payload: {
    name: string;
    lastname: string;
    date: string;
    service: string;
  };
}

interface GetBookingsByName {
  type: typeof GET_BOOKINGS_BY_NAME;
  payload: {
    name: string;
    lastname: string;
    date: string;
    service: string;
  };
}

interface GetBookingsByLastname {
  type: typeof GET_BOOKINGS_BY_LASTNAME;
  payload: {
    name: string;
    lastname: string;
    date: string;
    service: string;
  };
}

interface GetBookingsByService {
  type: typeof GET_BOOKINGS_BY_SERVICE;
  payload: {
    name: string;
    lastname: string;
    date: string;
    service: string;
  };
}

export type BookingsDispatchTypes =
  | GetAllBookings
  | GetBookings
  | GetBookingsByDate
  | GetBookingsByName
  | GetBookingsByLastname
  | GetBookingsByService;
