const mongoose = require("mongoose");
const Joi = require("joi");

const DoctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    unique: true,
  },
  workingHours: [
    {
      branch: {
        type: String,
      },
      startingTime: {
        type: String,
      },
      endingTime: {
        type: String,
      },
      workingDays: {
        type: Array,
      },
    },
  ],
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

const validateCreateDoctor = (object) => {
  const schema = Joi.object({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    workingHours: Joi.array()
      .items({
        branch: Joi.string().required(),
        startingTime: Joi.string().required(),
        endingTime: Joi.string().required(),
        workingDays: Joi.array().items(Joi.string()).required(),
      })
      .required(),
  });
  return schema.validate(object);
};

module.exports = {
  Doctor,
  validateCreateDoctor,
};
