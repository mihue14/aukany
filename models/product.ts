import { Schema, model, models } from "mongoose";
import moment from "moment";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
    },
    updatedAt: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

productSchema.pre("save", function (next) {
  this.createdAt = moment().format();
  this.updatedAt = moment().format();
  next();
});

export default models["Product"] || model("Product", productSchema);
