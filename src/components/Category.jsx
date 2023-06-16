import React from 'react'
import { categories } from '../data/data.js'

const Category = () => {
  return (
    <div className='px-4 py-12'>
        <h1 className='font-bold text-4xl text-center text-orange-500'>Top Rated Menu Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-5'>
            {categories.map((category,i)=>(
                <div key={i} className='bg-gray-200 flex justify-between items-center rounded-xl mt-3 px-2'>
                    <h2 className='font-bold sm:text-xl'>{category.name}</h2>
                    <img src={category.image} alt={category.name} className='w-14 md:w-20'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category