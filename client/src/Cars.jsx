import React, { useState } from "react";
import Title from "./components/Title";
import { assets } from "./assets/assets";

const Cars = () => {
  const [input, serInput] = useState("");
  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title="Available Cars"
          subTitle="Browse our selection of premium vehicles available for your next adventure"
        />
        <div className="flex items-center bg-white px-4  mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img src={assets.search_icon} alt="" className="w-4.5 h-4.5 mr-2" />
          <input
            type="text"
            onClick={(e) => serInput(e.target.value)}
            value={input}
            placeholder="Search by make, model or features"
            className="w-full h-full outline-none text-gray-500"
          />
          <img src={assets.filter_icon} className="w-4.5 h-4.5 ml-2" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cars;
