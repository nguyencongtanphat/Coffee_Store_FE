import React from 'react'
import AppButton from '../../../globalComponents/AppButton'
import Bill from '../components/Bill'
import CustomerInfo from '../components/CustomerInfo'
import PageTitle from '../../../globalComponents/PageTitle'

export default function ConfirmPage() {
  return (
    <div className='flex flex-col align-center'>
      <PageTitle title='XÁC NHẬN ĐƠN HÀNG' class='justify-center w-fit'/>
      <div class='md:flex md:ml-10 md:m-16'>
        <div class="md:flex-initial md:w-[35%] md:p-10 md:h-full">
          <CustomerInfo/>
        </div>
        <div class="relative md:flex-initial md:h-full md:w-6/12 md:ml-10 flex flex-col justify-center">
          <Bill class=' md:pl-10 md:ml-20'/>
          <div className='translate-x-0.5 justify-center md:ml-16 mt-0 w-fit absolute bottom-0 right-1/2'>
            <AppButton text='Đặt hàng'/>
          </div>
        </div>
      </div>
    </div>
  )
}