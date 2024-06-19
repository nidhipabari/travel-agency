import React from 'react';

const TestimonialCard = ({ name, title, comment }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg text-center bg-white">
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
      <p className="mb-4">{comment}</p>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default TestimonialCard;
