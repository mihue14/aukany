import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/mongo";
import Booking from "../../models/booking";

export default async function bookingApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  let perPage = 5;
  let page = Math.max(0, parseInt(req.query.page as string, 10));
  let { day } = req.query;

  dbConnect();

  if (method === "GET") {
    try {
      let bookings = await Booking.find()
        .limit(perPage)
        .skip(perPage * page)
        .sort({
          day: "desc",
        });

      if (day) {
        bookings = await Booking.find({ day: day })
          .limit(perPage)
          .skip(perPage * page)
          .sort({
            day: "desc",
          });
      }

      let allBookings = await Booking.find();

      res.status(200).json({
        message: "Reservas obtenidas con éxito!",
        bookings,
        allBookings,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const { name, lastname, service, phone, day, hour } = req.body;

      let bookingCreated = await Booking.create({
        name,
        lastname,
        service,
        phone,
        day: `${day.split("-")[2]}/${day.split("-")[1]}/${day.split("-")[0]}`,
        hour,
      });
      await bookingCreated.save();

      res.status(200).json({ message: "Reserva creada con éxito!" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
