import React, { useState } from 'react'
import Button from '../Components/Button'
import {arrowRight} from '../assets/icons'
import {shoes, statistics} from '../constants/index'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Components/ShoeCard'


const Hero = () => {
  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1)
  return (
<section
id='home'
className='w-full flex xl:flex-row flex-col  p-3
 justify-center min-h-screen max-container gap-10'
>
  <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-14'>
<p
className='text-xl font-montserrat text-coral-red'
>Our Summer Collection</p>
<h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
  <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>New Arrivals</span>
  <br/>
  <span className='text-coral-red inline-block mt-3'>Nike </span>
 <span> Shoes</span>

</h1>
<p className='font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm'>
  Discobver Stylish Nike arrivals,
  qulity comfert,and innovation for your active life.
</p>
<Button label="Shop Now"
iconURL={arrowRight}

/>
<div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>

{statistics.map((stat,index)=>(
  <div key={index}>
<p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
<p className='leading-7 font-montserrat text-gray-500'>{stat.label}</p>

  </div>

  
))}
</div>
  </div>

  <div className='relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
    <img
    src={bigShoeImage}
    alt='shoe'
    width={610}
    height={500}
    className='z-10 relative object-contain'
    >
    </img>
    <div className='flex gap-4 absolute -bottom-[5%] sm:left-[10%] '>
      {shoes.map((shoe,index)=>(
        <div key={index}>
          <ShoeCard imgURL={shoe}
          changeBigShoeImage={(shoe)=>{
            setbigShoeImage(shoe) // Add curly braces to provide a valid expression

          }}
          bigShoeImage={bigShoeImage}
          />


        </div>

      ))}
    </div>
  </div>
  
</section>  )
}

export default Hero