import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/mongo";
import Product from "../../models/product";
import moment from "moment";

export default async function productApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      let products = await Product.find();
      res
        .status(200)
        .json({ message: "Productos obtenidos con éxito!", products });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    let { name, price, image } = req.body;

    let productCreated = await Product.create({
      name,
      price,
      image,
    });

    await productCreated.save();

    res
      .status(200)
      .json({ message: "Producto creado con éxito!", productCreated });
  }
}
