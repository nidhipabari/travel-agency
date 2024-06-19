import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#184D47] text-white text-center py-20">
      <div className="container mx-auto grid grid-cols-2">
        <div>
        <h2 className="text-6xl font-bold mb-4 mr-40">Let's Have A </h2>
        <h2 className="text-6xl font-bold mb-4" >Relaxing Vacation</h2>
        <h2 className="text-6xl font-bold mb-4 mr-64">With Us!</h2>
        <h6 className="mb-10 mt-10 font-ubuntu">A company engaged in travel that will make it easier for you when <br></br> you want to vacation</h6>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-[#F58634] px-6 py-3 rounded">Explore More</button>
          <button className="bg-[#F58634] px-6 py-4 rounded-full"></button> 
          <p className='m-3 font-open-sans'>Watch Video</p>
        </div>

        </div>
        
        <div className="flex justify-center space-x-4">
            <div className="bg-gray-400 h-40 w-32 mt-20 "></div>
            <div>
                <div className="bg-gray-400 h-40 w-32 m-4"></div>
                <div className="bg-gray-400 h-40 w-32 m-4"></div>
            </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
