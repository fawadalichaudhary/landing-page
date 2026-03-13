import React from 'react'
import myImage from './img.png';

function herosection1() {
  return (
    <>
      {/* <section> */}
      <div className='flex items-center justify-center gap-3 p-8 bg-blue-950 flex-col md:flex-row'>
        <div className='bg-amber-500 flex-col'>
          <p className='text-xs'>New Arrival: CloudBerry Essence</p>
          <p className='text-6xl'>BerrySkin-</p>
          <p className='text-6xl'> Berries to </p>
          <p className='text-6xl'>Beyond.</p>
        </div>
        <div className='bg-blue-950 object-cover'>
          <img src={myImage} alt="img" />
        </div>
      </div>
      {/* </section> */}
    </>
  )
}

export default herosection1
