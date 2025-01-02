import React from 'react'

const Footer = () => {
  return (
    <div className='bg-amber-600'> 
      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
       <nav className='flex justify-center flex-wrap gap-6 text-2xl'>
        <a className='hover:text-cyan-500 text-pink-700' href="#">Home</a>
        <a className='hover:text-cyan-500 text-pink-700' href="#">About</a>
        <a className='hover:text-cyan-500 text-pink-700' href="#">Delivery</a>
        <a className='hover:text-cyan-500 text-pink-700' href="#">Contact</a>
       </nav>





        <p className='text-center text-black font-bold '>Naghmana@Allright Reservation </p>
      </footer>
     
    </div>
  )
}

export default Footer
