import React from 'react'
import { products } from '../constants'
import PopulerProductCard from '../Components/PopulerProductCard'

const PopulerProducts = () => {
  return (
    <section id='products'

    className='max-container max-sm::mt-12'
    >
      <div
      className='flex flex-col justify-start gap-5 '
      >
        <h2 className='text-4xl font-palanquin font-bold '>Our 
        <span className='text-coral-red font-montserrat '>     Populer      </span>
         Products</h2>
        <p className='max-w-lg mt-2 text-slate-gray '>Expreience Top notch Qulity and style with our sought after 
          selections.Dicover a world of comfort,design and value </p>

      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product)=>(
          <PopulerProductCard
          key={product.name}
          {...product}
          />

        ))}

      </div>

    </section>
  )
}

export default PopulerProducts