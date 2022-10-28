import React from 'react'

export default function Item() {
  return (
    <div className='flex'>
      <div className='flex-auto w-80 md:w-fit flex flex-col items-start'>
        <label className='text-b15 text-black m-2 md:text-b10 ml-4 md:ml-7 md:text-bold'>1 x Cà Phê Mouse Kem Cheese bdhwabhjasbjhbasdbfuhauihfuasihdfsu</label>
        <p className='text-b15 text-grey200 m-2 ml-8 md:text-b11 md:ml-10 md:my-3'>Size: Lớn</p>
        <p className='text-b15 text-grey200 m-2 ml-8 md:text-b11 md:ml-10 md:my-3'>Topping: Sốt caramel</p>
      </div>
      <div className='flex-auto '>
        <p className='text-b13 mt-7 text-black text-left ml-7 md:text-b9 md:ml-7'>49.000đ</p>
      </div>
    </div>
  )
}
