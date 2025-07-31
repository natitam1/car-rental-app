import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "./assets/assets";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const found = dummyCarData.find((car) => car._id === id);
    setCar(found);
  }, [id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={assets.arrow_icon} className="rotate-180 opacity-65" alt="" />
        Back to all cars
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Car image and details  */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt=""
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CarDetails;
