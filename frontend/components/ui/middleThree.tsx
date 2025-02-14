import React from 'react'
import Image from 'next/image'
import { Button } from './button';

const MiddleThree = () => {
  return (
    <div className='max-w-full mx-auto bg-white py-8 relative'>
        <div className='relative w-full h-full'>
          {/* Background Image */}
          <Image 
            src={"/Rectangle 102.png"}
            alt={"background"}
            width={1920}
            height={462}
            objectFit="cover"
          />
          
          {/* Centered Content */}
          <div className='absolute inset-0 flex flex-col items-center justify-center px-6 md:px-24 lg:px-48'>
            {/* Heading */}
            <h3 className='text-brandPrimary2 text-xl md:text-[35px] font-bold text-center mb-3 mt-20 md:max-w-[574px] mx-auto'>
              Get Latest Update By Subscribe Our Newsletter
            </h3>
            
            {/* Button */}
            <Button className="bg-brandPrimary1 text-white font-medium text-sm rounded shadow-sm hover:bg-pink-600 transition-all duration-300 mb-8 md:w-[173px] md:h-[49px]">
              Shop Now
            </Button>
          </div>
        </div>
    </div>
  );
};

export default MiddleThree;
