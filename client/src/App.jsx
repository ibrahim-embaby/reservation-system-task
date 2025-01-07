import { Route, Routes } from "react-router-dom";
import AddDoctor from "./pages/AddDoctor";
import Reservation from "./pages/Reservation";
import Doctors from "./pages/Doctors";
import Navbar from "./components/Shared/Navbar";
import ConfirmReservation from "./pages/ConfirmReservation";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Reservation />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/confirm-reservtion" element={<ConfirmReservation />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
