import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/mongo";
import Booking from "../../models/booking";

export default async function bookingApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      let bookings = await Booking.find();

      res
        .status(200)
        .json({ message: "Reservas obtenidas con éxito!", bookings });
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
