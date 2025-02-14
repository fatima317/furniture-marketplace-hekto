import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const DiscountItem = () => {
  return (
    <section className="max-w-[1920px] mx-auto bg-white m-4">
      {/* Heading */}
      <h2 className="text-center text-[32px] lg:text-[42px] font-bold text-[#151875] mb-8">
        Discount Item
      </h2>

      {/* Categories Centered */}
      <div className="flex justify-center lg:gap-4 gap-8 mb-6">
        {["Wood Chair", "Plastic Chair", "Sofa Collection"].map((category, index) => (
          <div
            key={index}
            className={`lg:text-[18px] text-[16px] ${
              index === 0 ? "text-[#FB2E86] underline" : "text-[#151875]"
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Main Content: Text on Left, Image on Right */}
      <div className="max-w-[1214px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between h-auto lg:h-[597px] px-6 lg:px-12 gap-6 lg:gap-0">
        {/* Text on the Left */}
        <div className="flex flex-col items-start max-w-[515px] mx-auto">
          <h3 className="text-brandPrimary2 font-bold lg:text-[28px] text-xl mb-4">
            20% Discount Of All Products
          </h3>
          <h4 className="text-brandPrimary1 font-medium lg:text-[18px] text-lg mb-4">
            Eams Sofa Compact
          </h4>
          <p className="text-[#B8B8DC] font-medium lg:text-[17px] text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-2 lg:mb-6 mb-2">
          {[
            "Material expose like metals",
            "Clear lines and geometric figures",
            "Simple neutral colours.",
            "Material expose like metals",
          ].map((feature, index) => (
            <p
              key={index}
              className="flex items-center text-[#B8B8DC] font-medium lg:text-[15px] text-sm mb-2"
            >
              <Check className="stroke-[#7569B2]" /> {feature}
            </p>
          ))}
          </div>
          <Button className="bg-brandPrimary1 text-white font-medium text-sm rounded shadow-sm hover:bg-pink-600 transition-all duration-300 md:w-[200px] md:h-[57px]">Shop Now</Button>
        </div>

        {/* Image on the Right */}
        <div className="flex items-center justify-center lg:max-w-[699px]">
          <Image
            src={"/Group 154.png"}
            alt="tortuga"
            width={699}
            height={597}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default DiscountItem
