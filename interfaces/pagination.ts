export interface IPagination {
  bookingsPerPage: number;
  allBookings: number;
  currentPage: number;
  prev: Function;
  next: Function;
  waitPaged: Function;
}
