import { IBookings } from "../../interfaces/bookings";
import {
  BookingsDispatchTypes,
  GET_ALL_BOOKINGS,
  GET_BOOKINGS,
  GET_BOOKINGS_BY_DATE,
  GET_BOOKINGS_BY_LASTNAME,
  GET_BOOKINGS_BY_NAME,
  GET_BOOKINGS_BY_SERVICE,
} from "./../types";
import { removeAccents } from "../../utils/accents";

const initialState = {
  allBookings: [],
  bookings: [],
};

const bookingsReducer = (
  state = initialState,
  action: BookingsDispatchTypes
) => {
  let AllBookings = state.allBookings;
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
      action.payload.name = removeAccents(action.payload.name);
      action.payload.lastname = removeAccents(action.payload.lastname);
      let filterDate = AllBookings.filter((elem: IBookings) =>
        action.payload.date === "undefined/undefined/" ||
        action.payload.date === ""
          ? AllBookings
          : elem.day === action.payload.date
      )
        .filter((elem: IBookings) =>
          removeAccents(elem.name)
            .toLowerCase()
            .includes(action.payload.name.toLowerCase())
        )
        .filter((elem: IBookings) =>
          removeAccents(elem.lastname)
            .toLowerCase()
            .includes(action.payload.lastname.toLowerCase())
        )
        .filter((elem: IBookings) =>
          action.payload.service === "DEFAULT"
            ? AllBookings
            : elem.service === action.payload.service
        );
      return { ...state, bookings: filterDate };

    case GET_BOOKINGS_BY_NAME:
      action.payload.name = removeAccents(action.payload.name);
      action.payload.lastname = removeAccents(action.payload.lastname);
      let filterName = AllBookings.filter((elem: IBookings) =>
        removeAccents(elem.name)
          .toLowerCase()
          .includes(action.payload.name.toLowerCase())
      )
        .filter((elem: IBookings) =>
          removeAccents(elem.lastname)
            .toLowerCase()
            .includes(action.payload.lastname.toLowerCase())
        )
        .filter((elem: IBookings) =>
          action.payload.date === "undefined/undefined/" ||
          action.payload.date === ""
            ? AllBookings
            : elem.day === action.payload.date
        )
        .filter((elem: IBookings) =>
          action.payload.service === "DEFAULT"
            ? AllBookings
            : elem.service === action.payload.service
        );
      return { ...state, bookings: filterName };

    case GET_BOOKINGS_BY_LASTNAME:
      action.payload.name = removeAccents(action.payload.name);
      action.payload.lastname = removeAccents(action.payload.lastname);
      let filterLastname = AllBookings.filter((elem: IBookings) =>
        removeAccents(elem.lastname)
          .toLowerCase()
          .includes(action.payload.lastname.toLowerCase())
      )
        .filter((elem: IBookings) =>
          removeAccents(elem.name)
            .toLowerCase()
            .includes(action.payload.name.toLowerCase())
        )
        .filter((elem: IBookings) =>
          action.payload.date === "undefined/undefined/" ||
          action.payload.date === ""
            ? AllBookings
            : elem.day === action.payload.date
        )
        .filter((elem: IBookings) =>
          action.payload.service === "DEFAULT"
            ? AllBookings
            : elem.service === action.payload.service
        );
      return { ...state, bookings: filterLastname };

    case GET_BOOKINGS_BY_SERVICE:
      action.payload.name = removeAccents(action.payload.name);
      action.payload.lastname = removeAccents(action.payload.lastname);
      let filterService = AllBookings.filter((elem: IBookings) =>
        removeAccents(elem.lastname)
          .toLowerCase()
          .includes(action.payload.lastname.toLowerCase())
      )
        .filter((elem: IBookings) =>
          removeAccents(elem.name)
            .toLowerCase()
            .includes(action.payload.name.toLowerCase())
        )
        .filter((elem: IBookings) =>
          action.payload.date === "undefined/undefined/" ||
          action.payload.date === ""
            ? AllBookings
            : elem.day === action.payload.date
        )
        .filter((elem: IBookings) =>
          action.payload.service === "DEFAULT"
            ? AllBookings
            : elem.service === action.payload.service
        );
      return { ...state, bookings: filterService };

    default:
      return state;
  }
};

export default bookingsReducer;
