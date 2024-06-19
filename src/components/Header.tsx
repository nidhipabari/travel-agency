import React, { useState } from 'react';

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className="bg-[#184D47] text-white p-6 w-full relative font-ubuntu">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl font-bold ml-24">Ulinyah</h1>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'About', 'Features', 'Destinations', 'Contact'].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  activeItem === item ? 'border-b-2 border-[#F58634]' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-20">
          <button className="mr-4">Login</button>
          <button className="bg-[#F58634] px-4 py-2 rounded">Register</button>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5/6 h-0.5 bg-white"></div>
    </header>
  );
};

export default Header;

