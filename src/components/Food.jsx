import React from 'react'
import {data} from '../data/data.js'
import {useState} from 'react'

const Food = () => {

  // useState for foods
  const [foods, setFoods] = useState(data)
  // Filter by type
  const filterType = (category) => {
    setFoods(
      data.filter((item)=>{
        return item.category === category;
      })
    )
  }
  // Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item)=>{
        return item.price === price;
      })
    )
  }
  
  return (
    <div className='w-full mx-auto px-4 py-12'>
      <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu</h1>
      
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div className='mt-5'>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-evelny flex-wrap'>
            <button onClick={()=>setFoods(data)} className='border-orange-500 m-1 bg-orange-500 text-white hover:bg-white hover:text-black duration-500'>All</button>
            <button onClick={()=>filterType('burger')} className='border-orange-500 m-1 bg-orange-500 text-white hover:bg-white hover:text-black duration-500'>Burgers</button>
            <button onClick={()=>filterType('pizza')} className='border-orange-500 m-1 bg-orange-500 text-white hover:bg-white hover:text-black duration-500'>Pizza</button>
            <button onClick={()=>filterType('salad')} className='border-orange-500 m-1 bg-orange-500 text-white hover:bg-white hover:text-black duration-500'>Salads</button>
            <button onClick={()=>filterType('chicken')} className='border-orange-500 m-1 bg-orange-500 text-white hover:bg-white hover:text-black duration-500'>Chicken</button>
          </div>
        </div>
        {/* Filter Price */}
        <div className='mt-5'>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[300px]'>
            <button onClick={()=>filterPrice('$')} className='border-orange-500 m-1 bg-orange-500 text-white hover:bg-white hover:text-black duration-500'>$</button>
            <button onClick={()=>filterPrice('$$')} className='border-orange-500 m-1 bg-orange-500 text-white hover:bg-white hover:text-black duration-500'>$$</button>
            <button onClick={()=>filterPrice('$$$')} className='border-orange-500 m-1 bg-orange-500 text-white hover:bg-white hover:text-black duration-500'>$$$</button>
            <button onClick={()=>filterPrice('$$$$')} className='border-orange-500 m-1 bg-orange-500 text-white hover:bg-white hover:text-black duration-500'>$$$$</button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((food,i)=>(
          <div key={i} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
            <img src={food.image} alt={food.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
            <div className='flex justify-between px-2 py-3'>
              <p className='font-bold'>{food.name}</p>
              <p><span className='bg-orange-500 text-white py-1 px-2 rounded-full'>{food.price}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food