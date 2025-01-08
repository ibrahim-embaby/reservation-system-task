const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectToDb = require("./config/connectToDb");

const app = express();
require("dotenv").config();

const allowedOrigins = require("./utils/allowedOrigins");

// connection to DB
connectToDb();

// middlewares
app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ limit: "40mb", extended: true }));

// Security Headers (helmet)
app.use(helmet());

// Cors
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Routes
app.use("/api/v1/doctors", require("./routes/doctorRotues"));
app.use("/api/v1/reservations", require("./routes/reservationRotues"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
