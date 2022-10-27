import React from 'react'
import Bill from '../components/Bill'
import CustomerInfo from '../components/CustomerInfo'

export default function confirmPage() {
  return (
    <div class='md:flex md:ml-10 md:m-16'>
      <div class="md:flex-initial md:w-[35%] md:p-10 md:h-full">
        <CustomerInfo/>
      </div>
      <div class="relative md:flex-initial md:h-full md:w-6/12 md:ml-10">
        <Bill/>
        <div className='absolute left-0 right-0 ml-auto mr-auto text-center mt-[-35px] md:left-14'>
            <button class="bg-orange hover:bg-orange text-white font-bold py-2.5 px-12 rounded-lg border-none text-b13 md:text-b11 md:py-3 md:px-20 md:rounded-xl">Đặt hàng</button>   
        </div>
      </div>
    </div>
  )
}