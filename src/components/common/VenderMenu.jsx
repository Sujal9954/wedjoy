import React from 'react'
import { useNavigate } from 'react-router-dom'

export const VenderMenu = () => {

    const navigate = useNavigate()
    
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Build your vendor team</h1>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <button onClick={()=>{navigate("/vendors"),(scrollTo(0,0))}} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:translate-y-[-10px] transition-all duration-500 hover:!bg-orange-200 transition">Caterers</button>
      <button onClick={()=>{navigate("/vendors"),(scrollTo(0,0))}} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:translate-y-[-10px] transition-all duration-500 hover:!bg-orange-200 transition">Florists</button>
      <button onClick={()=>{navigate("/vendors"),(scrollTo(0,0))}} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:translate-y-[-10px] transition-all duration-500 hover:!bg-orange-200 transition">Officiants</button>
      <button onClick={()=>{navigate("/vendors"),(scrollTo(0,0))}} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:translate-y-[-10px] transition-all duration-500 hover:!bg-orange-200 transition">Venues</button>
      <button onClick={()=>{navigate("/vendors"),(scrollTo(0,0))}} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:translate-y-[-10px] transition-all duration-500 hover:!bg-orange-200 transition">Videographer</button>
      <button onClick={()=>{navigate("/vendors"),(scrollTo(0,0))}} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:translate-y-[-10px] transition-all duration-500 hover:!bg-orange-200 transition">Wedding planners</button>
      <button onClick={()=>{navigate("/vendors"),(scrollTo(0,0))}} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:translate-y-[-10px] transition-all duration-500 hover:!bg-orange-200 transition">DJs</button>
      <button onClick={()=>{navigate("/vendors"),(scrollTo(0,0))}} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:translate-y-[-10px] transition-all duration-500 hover:!bg-orange-200 transition">View all</button>
      </div>
    </div>
  )
}
