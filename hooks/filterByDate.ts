import axios from "axios";

export const filterByDate = async (date: string) => {
  date = `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`;
  const { data } = await axios.get(`/api/booking?day=${date}`);

  let name = data.bookings.map((d: { name: string }) => d.name);
  let lastname = data.bookings.map((d: { lastname: string }) => d.lastname);
  let service = data.bookings.map((d: { service: string }) => d.service);
  let day = data.bookings.map((d: { day: string }) => d.day);
  let hour = data.bookings.map((d: { hour: string }) => d.hour);

  return { name, lastname, service, day, hour };
};
