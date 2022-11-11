import React from 'react'
import { FormatterService } from "../../../service";

export default function Item({item}) {
  return (
    <div className='flex'>
      <div className='flex-auto w-80 md:w-fit flex flex-col items-start'>
        <label className='text-b15 text-black m-2 md:text-b10 ml-4 md:ml-7 md:text-bold'>{item.Quantity} x Default</label>
        <p className='text-b15 text-grey200 m-2 ml-8 md:text-b11 md:ml-10 md:my-3'>Size: {item.Size}</p>
        <p className='text-b15 text-grey200 m-2 ml-8 md:text-b11 md:ml-10 md:my-3'>Topping: Sốt caramel</p>
      </div>
      <div className='flex-auto '>
        <p className='text-b13 mt-7 text-black text-left ml-7 md:text-b9 md:ml-7'>{FormatterService.format(item.Price*item.Quantity)}</p>
      </div>
    </div>
  )
}