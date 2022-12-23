import moment from "moment";
import { Schema, model, models } from "mongoose";

const bookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    hour: {
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

bookingSchema.pre("save", function (next) {
  this.createdAt = moment().format();
  this.updatedAt = moment().format();
  next();
});

export default models["Booking"] || model("Booking", bookingSchema);
