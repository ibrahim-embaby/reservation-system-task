const {
  deleteDoctorCtrl,
  getAllDoctorsCtrl,
  createDoctorCtrl,
  getDoctorCtrl,
} = require("../controllers/doctorControllers");

const router = require("express").Router();

// /api/v1/doctors
router.route("/").post(createDoctorCtrl).get(getAllDoctorsCtrl);

// api/v1/doctors/:id
router.route("/:id").get(getDoctorCtrl).delete(deleteDoctorCtrl);

module.exports = router;
