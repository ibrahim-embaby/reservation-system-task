const mongoose = require("mongoose");
const Joi = require("joi");

const ReservationSchema = new mongoose.Schema({
  sessionType: {
    type: String,
  },
  selectedDate: {
    type: String,
  },
  branch: {
    type: String,
  },
  time: {
    type: String,
  },
  doctor: {
    type: String,
  },
  price: {
    type: String,
  },
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

const validateCreateReservation = (object) => {
  const schema = Joi.object({
    sessionType: Joi.string().required(),
    selectedDate: Joi.string().required(),
    branch: Joi.string().required(),
    time: Joi.string().required(),
    doctor: Joi.string().required(),
    price: Joi.string().required(),
  });
  return schema.validate(object);
};

module.exports = {
  Reservation,
  validateCreateReservation,
};
