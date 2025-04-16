import React from 'react'
import image from "../../assets/img/avatar5.png"

export const Vendors = () => {
  return (
    <div className='bg-orange-50'>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 my-16'>
        <div className='flex flex-col gap-1 text-sm text-black'>
          <p  className='w-[94vw] mx-3 sm:w-auto pl-3 py-1.5 pr-16 bg-white border border-gray-900 rounded transition-all cursor-pointer hover:!bg-orange-200 hover:translate-x-[10px] transition-all duration-500'>Wedding Planners</p>
          <p  className='w-[94vw] mx-3 sm:w-auto pl-3 py-1.5 pr-16 bg-white border border-gray-900 rounded transition-all cursor-pointer hover:!bg-orange-200 hover:translate-x-[10px] transition-all duration-500'>Florist</p>
          <p  className='w-[94vw] mx-3 sm:w-auto pl-3 py-1.5 pr-16 bg-white border border-gray-900 rounded transition-all cursor-pointer hover:!bg-orange-200 hover:translate-x-[10px] transition-all duration-500'>Decoretors</p>
          <p  className='w-[94vw] mx-3 sm:w-auto pl-3 py-1.5 pr-16 bg-white border border-gray-900 rounded transition-all cursor-pointer hover:!bg-orange-200 hover:translate-x-[10px] transition-all duration-500'>Caterees</p>
          <p  className='w-[94vw] mx-3 sm:w-auto pl-3 py-1.5 pr-16 bg-white border border-gray-900 rounded transition-all cursor-pointer hover:!bg-orange-200 hover:translate-x-[10px] transition-all duration-500'>Photographer</p>
          <p  className='w-[94vw] mx-3 sm:w-auto pl-3 py-1.5 pr-16 bg-white border border-gray-900 rounded transition-all cursor-pointer hover:!bg-orange-200 hover:translate-x-[10px] transition-all duration-500'>DJs</p>
        </div>
        <div className='w-full bg-white rounded-xl grid grid-cols-auto gap-4 gap-y-6'>
          
              <div  className='border border-gray-900 rounded-xl overflow-hidden cursor-pointer '>
                  <img className='bg-blue-50 ' src={image} alt="" />
                  <div className='p-4 '>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>SUJAL PRAJAPATI</p>
                      <p className=' text-gray-600 text-sm'>ALL ROUNDER</p>
                  </div>
              </div>
        
        </div>
      </div>
    </div>

  )
}
