import React from 'react'

const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className={` flex justify-center items-center gap-2
    px-7 py-4 border font-montserrat text-lg  rounded-full
    ${backgroundColor?` ${backgroundColor} ${textColor} ${borderColor}`:
  'bg-coral-red border-coral-red text-white'}
   ${fullWidth && 'w-full'} `}>
       {label}
      {iconURL &&  <img src={iconURL}
       className='ml-2 w-5 h-5  '
       ></img>}
    </button>
  )
}

export default Button