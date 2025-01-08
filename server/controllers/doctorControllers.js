const { Doctor, validateCreateDoctor } = require("../models/Doctor");

// PROTOTYPE
/**
 * @description
 * @route /api/v1/doctors/
 * @method
 */
// module.exports.DoctorCtrl = async (req, res) => {
//     try {

//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         success: false,
//         data: null,
//         message: "Internal server error",
//       });
//     }
//   };

/**
 * @description create a doctor
 * @route /api/v1/doctors
 * @method POST
 */
module.exports.createDoctorCtrl = async (req, res) => {
  try {
    const { error } = validateCreateDoctor(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        data: null,
        message: error.details[0].message,
      });
    }
    const newDoctor = await Doctor.create(req.body);
    res.status(201).json({
      success: true,
      data: newDoctor,
      message: "doctor is created successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      if (error.keyPattern?.email) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Email already exists",
        });
      } else if (error.keyPattern?.phoneNumber) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Phone Number already exists",
        });
      }
    }
    res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error",
    });
  }
};

/**
 * @description get single doctor
 * @route /api/v1/doctors/:id
 * @method GET
 */
module.exports.getDoctorCtrl = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: doctor,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error",
    });
  }
};

/**
 * @description get all doctors
 * @route /api/v1/doctors
 * @method GET
 */
module.exports.getAllDoctorsCtrl = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      success: true,
      data: doctors,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error",
    });
  }
};

/**
 * @description delete a doctor
 * @route /api/v1/doctors/:id
 * @method DELETE
 */
module.exports.deleteDoctorCtrl = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: deletedDoctor,
      message: "doctor deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error",
    });
  }
};
