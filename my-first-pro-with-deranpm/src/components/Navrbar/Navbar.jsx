import React from 'react'
import logo from '../../assets/navlogo.jpg'

const Navbar = () => {
  return (
    <>

   <div className='flex items-center justify-between mx-10'>
    <div className='w-1/6 '>
      <img 
      src={logo}
       alt=""
       className='self-center w-20 h-20 mr-3  rounded-full '/>
    </div>


      <ul className='flex items-center justify-center h-40 w-1/2 '> 
        <li className='p-2'>Accueil</li>
        <li className='p-2'>blogs</li>
      </ul>
   

    <div className='rounded-md bg-blue-500  p-2 text-white text-lg'>
      <button className='flex items-center justify-center'>
        <i className="fa-solid fa-user mr-0.5"></i>
        <span>Actualités→</span>
      </button>
    </div>
  
</div>
    </>
  )
}

export default Navbar