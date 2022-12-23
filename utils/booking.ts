import { IBookings } from "../interfaces/bookings";
import { IInput } from "../interfaces/input";

// Array de horarios
export const arrayHour = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
];

export const booking = (day: string, bookings: string[]) => {
  let arrDay = day.split("-");
  day = `${arrDay[2]}/${arrDay[1]}/${arrDay[0]}`;
  let arrDayFree: string[] = [];
  let arrDayOff: string[] = [];
  let arrFinal: string[] = [];

  for (let i = 0; i < arrayHour.length; i++) {
    arrDayFree.push(day.concat(" " + arrayHour[i]));
  }

  for (let i = 0; i < bookings.length; i++) {
    arrDayOff.push(bookings[i]);
  }

  for (let i = 0; i < arrDayFree.length; i++) {
    for (let j = 0; j < arrDayOff.length; j++) {
      if (arrDayFree[i] === arrDayOff[j]) {
        arrFinal.push(arrDayFree[i].slice(11, 16) + " RESERVADO ✖");
      }
    }
  }

  for (let i = 0; i < arrayHour.length; i++) {
    arrFinal.push(arrayHour[i]);
  }

  arrFinal.sort();

  arrFinal.forEach((num: string, index: number) => {
    if (index < arrFinal.length - 1 && arrFinal[index + 1].startsWith(num)) {
      arrFinal.splice(index, 1);
    }
  });
  return arrFinal;
};
