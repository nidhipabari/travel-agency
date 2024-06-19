import React from 'react';

const SearchSection = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex space-x-4 justify-center mb-10 font-ubuntu ml-auto mr-10">
      <select className="border p-2 rounded">
        <option>Location</option>
      </select>
      <select className="border p-2 rounded">
        <option>Date</option>
      </select>
      <select className="border p-2 rounded">
        <option>People</option>
      </select>
      <button className="bg-orange-500 px-4 py-2 rounded text-white">Search Now</button>
    </div>
  );
};

export default SearchSection;



