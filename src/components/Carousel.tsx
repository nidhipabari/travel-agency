import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Ali Setiawan',
    title: 'Founder Mabar Inc.',
    comment: 'Very helpful when I want to vacation and there are lots of promotions, I really like it, thank you very much.'
  },
  {
    name: 'Emilia Mabar',
    title: 'Founder Mabar Inc.',
    comment: 'Very helpful when I want to vacation and there are lots of promotions, I really like it, thank you very much.'
  },
  {
    name: 'Santai Selalu',
    title: 'Founder Mabar Inc.',
    comment: 'Very helpful when I want to vacation and there are lots of promotions, I really like it, thank you very much.'
  },
  {
    name: 'Siti Santai',
    title: 'Founder Mabar Inc.',
    comment: 'Very helpful when I want to vacation and there are lots of promotions, I really like it, thank you very much.'
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full py-10">
      <h2 className="text-center text-4xl font-bold mb-4">
        What People <span className="text-orange-500">Say</span> About Us
      </h2>
      <p className="text-center mb-10 text-gray-600 font-ubuntu">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quam At <br></br>Integer Integer Faucibus Scelerisque Dui, Et, Placerat Duis.
      </p>
      <div className="flex items-center justify-center space-x-4 font-ubuntu">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transform transition-transform duration-500 ${index === current ? 'scale-100' : 'scale-75 opacity-50'}`}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? 'bg-orange-500' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button onClick={prevSlide} className="text-2xl p-2 rounded-full bg-gray-300 hover:bg-gray-400">
          &larr;
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button onClick={nextSlide} className="text-2xl p-2 rounded-full bg-gray-300 hover:bg-gray-400">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
