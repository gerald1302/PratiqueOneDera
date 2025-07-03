import React from 'react'
import img1 from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import img4 from '../../assets/image4.jpg'
import img5 from '../../assets/image5.jpg'
import img6 from '../../assets/image6.jpg'

const Gird = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col mt-40'>
      <h1 className='text-3xl font-bold'>CITY NOT BE MISSED</h1>
      <p className='text-base font-normal mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.</p>
      <div className="flex gap-4 p-4">
        <div className="flex flex-col gap-4 w-1/3">
        <img src={img1} alt="" className='w-full h-64 object-cover rounded-lg'/>
        <div className="flex gap-4">
          <img src={img2} alt="" className='w-full h-32 object-cover rounded-lg'/>
           <img src={img3} alt="" className='w-full h-32 object-cover rounded-lg'/>
        </div>  
        </div>
        <div className="w-1/3">
         <img src={img4} alt="" className='w-full h-full object-cover rounded-lg'/>
        </div>
        <div className="flex flex-col gap-4 w-1/3">
         <img src={img5} alt="" className='w-full h-64 object-cover rounded-lg'/>
           <div className="flex gap-4">
            <img src={img6} alt="" className='w-full h-32 object-cover rounded-lg'/>
           </div>
        </div>
    </div>
 </div>
    </>
  )
}

export default Gird