const {
  deleteReservationCtrl,
  getAllReservationsCtrl,
  createReservationCtrl,
  getReservationCtrl,
  getTodayReservationsCtrl,
} = require("../controllers/reservationControllers");

const router = require("express").Router();

// /api/v1/reservations
router.route("/").post(createReservationCtrl).get(getAllReservationsCtrl);

// api/v1/reservations/today
router.route("/today").get(getTodayReservationsCtrl);

// api/v1/reservations/:id
router.route("/:id").get(getReservationCtrl);

module.exports = router;
