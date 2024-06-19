import React from 'react';
import { FaStar } from 'react-icons/fa';

const VacationPlaceCard = ({ place, price }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <div className="h-32 bg-gray-300 rounded mb-4"></div> {/* Placeholder for image */}
      <h2 className="text-xl font-bold mb-2">{place}</h2>
      <div className="flex items-center justify-center mb-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <div className="text-lg font-semibold">{price}/person</div>
      <button className="bg-[#f4e6dd] text-[#F58634] px-4 py-2 rounded mt-4">View</button>
    </div>
  );
};

export default VacationPlaceCard;




