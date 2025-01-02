import React from 'react'

const Reservation = () => {

  return (
    <section className='bg-black'>

    <div className='container mx-auto font-serif  font-extrabold  mb-6 text-center'>Reservation</div>
    <h2 className="text-3xl font-extrabold mb-6 text-white">Make A Resarvation</h2>
      <form className='max-w-md mx-auto'></form>
      <div className='mb-4 text-white'>
        <input type="text"
        placeholder='your Name'
        className='w-full p-3 border border-green-500 rounded-md bg-red-800'
        required/>
      </div>
      <div className='mb-4'>
          <input type='email'
          placeholder='your Email'
          className='w-full p-3 border border-green-500 rounded-md bg-red-800'/>
      </div>
      <div className="mb-4">
        <input type='date'
        className='w-full p-3 border border-green-500 rounded-md bg-red-800'
        />

      </div>
      <div className='mb-4'>
        <input type='time'
        className='w-full p-3 border border-green-500 rounded-md bg-red-800'
        />

      </div>
      <div className="mb-4">
        <button className="bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-400">Reserved Table</button>
      </div>
    
    </section>
  )
}

export default Reservation
