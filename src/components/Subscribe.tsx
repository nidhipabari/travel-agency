import React from 'react';

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 bg-[#184D47] rounded-md w-3/4 mx-auto mb-24 text-white text-center">
      <h1 className="text-3xl font-bold mb-5">Subscribe To Our Newsletter</h1>
      <p className="text-sm font-ubuntu">
        Get notifications about tips, new destinations, and <br /> exclusive promo news just for you.
      </p>
      <div className="relative w-full max-w-md mt-8 font-ubuntu">
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-3 rounded-md text-gray-900 w-full"
          
        />
            <button className="absolute right-0 top-0 mt-1 mb-1 mr-1 p-2 bg-[#F58634] rounded-2xl text-white">
            Subscribe
            </button>        
        </div>
    </div>
  );
};

export default Subscribe;
