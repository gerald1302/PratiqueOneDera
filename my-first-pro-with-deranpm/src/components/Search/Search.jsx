import React from 'react'
import search1 from '../../assets/search1.jpg'
import search2 from '../../assets/search2.jpg'
import search3 from '../../assets/search3.jpg'
const Search = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col mt-40'>
      <h1 className='text-3xl font-bold'>SEARCH WORLDWIDE</h1>
      <div className='flex items-center justify-center h-20'>
         <p className='text-base font-normal mt-5 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
        <input type="text" placeholder='Search' className=' p-2 border rounded-md'/>
        <button className='bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 transition duration-300'>
          Chercher
        </button>
      </div>
      <div className='container mx-auto mt-40'>
        <div className='grid grid-cols-3 gap-20 '>
          <div className='shadow-lg'>
            <img src={search1} alt="" className='w-full h-64  object-cover rounded-lg'/>
            <p className='flex items-center justify-center text-normal font-normal mt-5 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='shadow-lg'>
            <img src={search2} alt="" className='shadow-lg w-full h-64 object-cover rounded-lg'/>
            <p className='flex items-center justify-center text-normal font-normal mt-5 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='shadow-rounded-lg'>
            <img src={search3} alt="" className='shadow-lg w-full h-64 object-cover rounded-lg'/>
            <p className='flex items-center justify-center text-normal font-normal mt-5 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Search