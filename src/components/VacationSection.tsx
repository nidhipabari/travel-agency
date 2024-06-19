import React, { useState } from 'react';
import VacationPlaceCard from './VacationPlaceCard';
import SearchSection from './SearchSection';

const VacationSection = () => {
  const [activeButton, setActiveButton] = useState('Special Deals');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <SearchSection />
        <div className="grid grid-cols-2 gap-10 items-center">
          <h3 className="text-center text-4xl font-bold mb-4">
            Choose The <span className="text-orange-500">Best</span> Place <br />For Vacation
          </h3>
          <div className="text-center mb-6 text-sm font-ubuntu">
            Let's Take A Vacation Before The Work Day Starts Again, Go To <br />The Place You Want.
          </div>
        </div>

        <div className="flex justify-left m-12 space-x-10 mb-6 font-ubuntu">
          {['Special Deals', 'Popular', 'Recommendation', 'Best Price'].map((button) => (
            <button
              key={button}
              className={`font-bold ${activeButton === button ? 'underline decoration-[#F58634]' : ''}`}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-6">
          <VacationPlaceCard place="Kumano Beach" price="$1,100" />
          <VacationPlaceCard place="Churfirsten Mountain" price="$2,300" />
          <VacationPlaceCard place="Pantai Kelan" price="$1,400" />
          <VacationPlaceCard place="Montjuic Statue" price="$3,100" />
        </div>
      </div>
    </section>
  );
};

export default VacationSection;

