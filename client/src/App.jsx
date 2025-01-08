import { Route, Routes } from "react-router-dom";
import AddDoctor from "./pages/AddDoctor";
import Reservation from "./pages/Reservation";
import Doctors from "./pages/Doctors";
import Navbar from "./components/Shared/Navbar";
import ConfirmReservation from "./pages/ConfirmReservation";
import Footer from "./components/Shared/Footer";
import { ToastContainer } from "react-toastify";
import AllReservations from "./pages/AllReservations";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Doctors />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirm-reservation" element={<ConfirmReservation />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/reservations" element={<AllReservations />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
