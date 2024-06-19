import React from 'react'

const FooterPartOne = () => {
  return (
    <div className='grid grid-cols-4 mb-10 font-ubuntu'>
        <div className='ml-40'>
            <h1 className='font-bold text-xl'>Ulinyah</h1>
            <p>A company engaged in travel that will <br></br>make it easier for you when you want to<br></br> vacation</p>
        </div>
        <div className='ml-48'>
            <h1 className='font-bold'>Links</h1>
            <p className='mt-3'>Home</p>
            <p className='mt-3'>Services</p>
            <p className='mt-3'>Pricing</p>
            <p className='mt-3'>Products</p>
            <p className='mt-3'>Contact</p>
        </div>
        <div className='ml-24'>
            <h1 className='font-bold'>About</h1>
            <p className='mt-3'>Partners</p>
            <p className='mt-3'>Careers</p>
            <p className='mt-3'>Press</p>
            <p className='mt-3'>Community</p>
            
        </div>
        <div>
            <h1 className='font-bold'>Our Office</h1>
            <p className='mt-3'>Indonesia<br></br>Jl. Griya Permata Hijau no D1 Purwomartani<br></br> Kalasan 543881</p>
            <p className='mt-3'>Singapore<br></br>
            35 Mandalay Road 13-37 Mandalay Towers <br></br>Singapore 308215</p>
            
        </div>

    </div>
  )
}

export default FooterPartOne;