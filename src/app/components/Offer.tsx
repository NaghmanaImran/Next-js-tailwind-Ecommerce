
'use client'
import React from 'react'

 type Offer = {
 title:string;
 description: string;

 }
 const Specialoffers: React.FC =()=>{
  const offers : Offer[] = [
    {
      title:'Happy Hour',
      description: "5pm to 7pm avail get all drinks 50% off "
    },

  
  {
    title:'Weakly ',
    description: "5pm to 7pm avail get all drinks 50% off "
  },
  
  {
    title:'Family Meal Deal',
    description: "5pm to 7pm avail get all drinks 50% off "
  },
  {
    title:'Mid Night Deal',
    description: "12am to 2am avail get all drinks 50% off "
  },
]
const handleofferclick = (description: string) =>{
  alert(description);
}


return(
<section className = 'py-10'>
  <div className='container mx-auto text-center'>
    <h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6'>
      {offers.map((offers,index) =>(
        <button key={index}
       onClick={()=>handleofferclick(offers.description)} 
       className='bg-amber-500 shadow-lg rounded-lg text-center hover:bg-green-800 transition duration-300 transform hover:scale-105'>
        <h3 className='text-2xl font-semibold text-black-700'>{offers.title}</h3>
        <p className='text-red-600 mt-3'>{offers.description}</p>

        </button>
      ))}

    </div>

  </div>
</section>
)
}
 export default Specialoffers