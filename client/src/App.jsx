import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import CarDetails from "./CarDetails";
import Cars from "./Cars";
import MyBookings from "./MyBookings";
import Footer from "./components/Footer";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
