import axios from "axios";

export const pagination = async (page: number) => {
  let { data } = await axios.get(`/api/booking?page=${page}`);

  let name = data.bookings.map((d: { name: string }) => d.name);
  let lastname = data.bookings.map((d: { lastname: string }) => d.lastname);
  let service = data.bookings.map((d: { service: string }) => d.service);
  let day = data.bookings.map((d: { day: string }) => d.day);
  let hour = data.bookings.map((d: { hour: string }) => d.hour);

  return { name, lastname, service, day, hour };
};

export const filters = async () => {
  let { data } = await axios.get(`/api/booking?`);
};
