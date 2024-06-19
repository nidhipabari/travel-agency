import React from 'react'

const Achievement = () => {
  return (
    <div className='bg-white grid grid-cols-2'>
        <div className='m-24'>
            <h1 className='text-4xl font-bold mt-14'><span className="text-orange-500">Our</span> Achievement</h1>
            <p className='text-md mt-4 font-ubuntu '>It is a result that we’re as a company bring about while fulfilling a <br></br> particular role. Typically they are things that you created, built, <br></br>designed, sold or initiated.</p>
            <button className="bg-[#F58634] px-6 py-3 rounded text-white mt-4 font-ubuntu ">Learn More</button>
            <div className='grid grid-cols-3 mt-10 '>
                <div>
                    <h1 className='text-2xl font-bold'>18K+</h1>
                    <p className='font-ubuntu '>Tourist</p>
                    <p className='font-ubuntu '>Flight</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>8+</h1>
                    <p className='font-ubuntu '>Award</p>
                    <p className='font-ubuntu '>Gained</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>8+</h1>
                    <p className='font-ubuntu '>Years</p>
                    <p className='font-ubuntu'>Experience</p>
                </div>
            </div>
        </div>
        <div className='bg-gray-400 h-96 w-96 rounded-md m-24 '>

        </div>
    </div>
  )
}

export default Achievement;