import { combineReducers } from "redux";
import bookingReducer from "./bookingsReducer";

export const rootReducer = combineReducers({
  bookingReducer,
});
