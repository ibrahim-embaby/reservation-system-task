const {
  Reservation,
  validateCreateReservation,
} = require("../models/Reservation");

// PROTOTYPE
/**
 * @description
 * @route /api/v1/reservations/
 * @method
 */
// module.exports.ReservationCtrl = async (req, res) => {
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
 * @description create a reservation
 * @route /api/v1/reservations
 * @method POST
 */
module.exports.createReservationCtrl = async (req, res) => {
  try {
    const { error } = validateCreateReservation(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        data: null,
        message: error.details[0].message,
      });
    }
    const newReservation = await Reservation.create(req.body);
    res.status(201).json({
      success: true,
      data: newReservation,
      message: "reservation is created successfully",
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
 * @description get single reservation
 * @route /api/v1/reservations/:id
 * @method GET
 */
module.exports.getReservationCtrl = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: reservation,
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
 * @description get today's reservations
 * @route /api/v1/reservations/today
 * @method GET
 */
module.exports.getTodayReservationsCtrl = async (req, res) => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const todayDate = new Date(Date.now());
  const todayDayName = days[todayDate.getDay()];
  try {
    const reservations = await Reservation.find();

    // only send today's sessions
    const todaySessions = reservations.filter((reservation) => {
      const selectedDate = new Date(reservation.selectedDate);
      const selectedDayName = days[selectedDate.getDay()];
      return selectedDayName === todayDayName;
    });

    res.status(200).json({
      success: true,
      data: todaySessions,
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
 * @description get all reservations
 * @route /api/v1/reservations
 * @method GET
 */
module.exports.getAllReservationsCtrl = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json({
      success: true,
      data: reservations,
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
 * @description delete a reservation
 * @route /api/v1/reservations/:id
 * @method DELETE
 */
module.exports.deleteReservationCtrl = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json({
      success: true,
      data: deletedReservation,
      message: "reservation deleted successfully",
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
