import React from 'react'
import appleFish from '../../assets/AppStore.jpeg'
import playstore from '../../assets/playStore.png'

const Home = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col mt-5'>
      <h1 className='text-4xl font-bold'> The Whole in Application <br />
        <span className='bg-blue-400 text-white'> World</span> In one app
      </h1>
      <p className=' flex items-center justify-center h-20 text-base font-normal mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.</p>
        <div className='flex items-center justify-center mt-5 gap-10 rounded-full'>
          <img src={appleFish} alt="" 
          className='w-40 h-40 rounded-full'/>
          <img src={playstore} alt="" 
          className='bg-white w-40 h-40 rounded-full '/>
        </div>
    </div>
    
    </>
  )
}

export default Home