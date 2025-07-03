import React from 'react'
import AppStore from '../../assets/AppStore.jpeg'
import GooglePlay from '../../assets/playStore.png'
const Accomodation = () => {
  return (
    <>
    <div className='mt-40 bg-gray-100 p-10 '>
      <div className='flex items-center justify-between flex-wrap'>
        <div>
             <h1 className='text-3xl text-blue-400'>Accomodation</h1>
             <p className='text-normal font-normal mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      <div>
        <div className='flex items-center justify-center  gap-4 mt-10'>
          <img src={AppStore} alt="App Store" className='rounded-full w-40 h-12 object-cover'/>
          <img src={GooglePlay} alt="Google Play" className=' rounded-full w-40 h-12 object-cover'/>
        </div>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Accomodation