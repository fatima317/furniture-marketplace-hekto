import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <div className='bg-[#7E33E0] w-full mx-auto px-4 md:px-32 py-2 flex flex-row items-center justify-end'>
      <div className='hidden md:flex items-center gap-8'>
      <Link href="/myAccount"
        className="flex items-center text-[#F1F1F1] text-sm md:text-base font-medium gap-1 cursor-pointer">
          Login
      </Link>
      <Link href="/myAccount"
        className="flex items-center text-[#F1F1F1] text-sm md:text-base font-medium gap-1 cursor-pointer">
          Signup
      </Link>
        <p className='flex items-center text-[#F1F1F1] text-sm md:text-base font-medium gap-1 cursor-pointer'>
          Sell On Hekto
        </p>
        <p className='flex items-center text-[#F1F1F1] text-sm md:text-base font-medium gap-1 cursor-pointer'>
          Help & Support
        </p>
        <p className='flex items-center text-[#F1F1F1] text-sm md:text-base font-medium gap-1 cursor-pointer'>
          English <ChevronDown className='w-4 h-4' />
        </p>
      </div>
    </div>
  )
}

export default Topbar
