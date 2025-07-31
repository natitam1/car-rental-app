import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "./assets/assets";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    console.log("URL param id:", id);
    console.log("dummyCarData:", dummyCarData);

    const found = dummyCarData.find((car) => car._id === id);
    console.log("Found car:", found);
    setCar(found);
  }, [id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer hover:gap-3"
        onClick={() => navigate(-1)}
      >
        <img src={assets.arrow_icon} className="rotate-180 opacity-65" alt="" />
        Back to all cars
      </button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CarDetails;
