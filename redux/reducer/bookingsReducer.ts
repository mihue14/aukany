import {
  BookingsDispatchTypes,
  GET_ALL_BOOKINGS,
  GET_BOOKINGS,
  GET_BOOKINGS_BY_DATE,
} from "./../types";
const initialState = {
  allBookings: [],
  bookings: [],
};

const bookingsReducer = (
  state = initialState,
  action: BookingsDispatchTypes
) => {
  switch (action.type) {
    case GET_ALL_BOOKINGS:
      return {
        ...state,
        allBookings: action.payload,
        bookings: action.payload,
      };

    case GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
      };

    case GET_BOOKINGS_BY_DATE:
      let AllBookings = state.allBookings;
      if (action.payload === "undefined/undefined/")
        return { ...state, bookings: AllBookings };
      let filter = AllBookings.filter(
        (elem: { day: string }) => elem.day === action.payload
      );
      return { ...state, bookings: filter };

    default:
      return state;
  }
};

export default bookingsReducer;
