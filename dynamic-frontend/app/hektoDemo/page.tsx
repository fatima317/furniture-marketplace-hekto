import { Button } from '@/components/ui/button';
import { Check, Circle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const HektoDemo = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
        {/* Header Section */}
        <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Hekto Demo
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Hekto Demo
            </p>
          </div>
        </div>
      </div>
      {/* Main Content Section */}
      <div className='py-28 px-4 md:px-8 lg:px-32'>
        <h2 className='text-[24px] font-bold text-brandPrimary2 mb-2'>Hekto Demo</h2>
        <p className='text-[12px] text-brandPrimary2 font-medium mb-4'>
          Cart/ Information/ Shipping/ Payment
        </p>
      
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Left Section: Contact and Shipping Information */}
        <div className='w-full md:w-[60%] md:max-w-[770px] bg-[#F8F8FD]'>
          <div className='flex flex-col px-4 md:px-8 py-10'>
            <div className='flex justify-between'>
            <h3 className='text-sm md:text-[18px] text-brandPrimary2 font-bold mb-8'>Contact Information</h3>
            <div className='flex gap-1 mb-8'>
            <p className='text-[#C1C8E1] text-xs md:text-[14px] font-medium'>Already have an account?</p>
            <p className='text-[#C1C8E1] text-xs md:text-[14px] font-medium'>Log in</p>
            </div>
            </div>
            {/* Input Field */}
            <p className='text-[#C1C8E1] text-xs md:text-[14px] font-semibold md:mb-2'>Email or mobile phone number</p>
            <Image src={"/Line 14.png"} alt='line' width={698} height={0} className="w-full"/>
            <div className='flex gap-2 my-8 items-center'>
              <Check className='bg-[#19D16F] stroke-white w-3 h-3'/>
              <p className='text-brandPrimary3 text-[12px] font-medium'>Keep me up to date on news and excluive offers</p>
            </div>
            {/* Shipping Address */}
            <h3 className='text-sm md:text-[18px] text-brandPrimary2 font-bold my-8'>Shipping address</h3>
            <div className='flex flex-col'>
              <div className='flex flex-col md:flex-row justify-between my-4'>
              <div className="w-full md:w-[48%]">
              <p className='text-[#C1C8E1] text-xs md:text-[14px] font-medium md:mb-2'>First name (optional)</p>
              <Image src={"/Line 15.png"} alt='line' width={336} height={0} className="w-full"/>
              </div>
              <div className="w-full md:w-[48%] mt-6 md:mt-0">
              <p className='text-[#C1C8E1] text-xs md:text-[14px] font-medium md:mb-2'>Last name</p>
              <Image src={"/Line 15.png"} alt='line' width={336} height={0} className="w-full"/>
              </div>
              </div>
              {/* Address Fields */}
              {[
                  { label: "Address", src: "/Line 14.png" },
                  { label: "Apartment, suite, etc. (optional)", src: "/Line 14.png" },
                  { label: "City", src: "/Line 14.png" },
                ].map((field, index) => (
                  <div key={index} className="my-4">
                    <p className="text-[#C1C8E1] text-xs md:text-[14px] font-medium md:mb-2">
                      {field.label}
                    </p>
                    <Image
                      src={field.src}
                      alt="line"
                      width={698}
                      height={0}
                    />
                  </div>
                ))}
                {/* Country and Postal Code */}
              <div className='flex flex-col md:flex-row justify-between my-4'>
              <div className="w-full md:w-[48%]">
              <p className='text-[#C1C8E1] text-xs md:text-[14px] font-medium md:mb-2'>Bangladesh</p>
              <Image src={"/Line 15.png"} alt='line' width={336} height={0} className="w-full"/>
              </div>
              <div className="w-full md:w-[48%] mt-6 md:mt-0">
              <p className='text-[#C1C8E1] text-xs md:text-[14px] font-medium md:mb-2'>Postal Code</p>
              <Image src={"/Line 15.png"} alt='line' width={336} height={0} className="w-full"/>
              </div>
              </div>
               {/* Continue Shipping Button */}
              <div className='mt-4 md:mt-20 md:mb-10 mb-2'>
                <Button  className="bg-brandPrimary1 text-white font-semibold text-[16px] rounded shadow-sm hover:bg-pink-600 transition-all duration-300" style={{ width: "182px", height: "44px" }}>
                  Continue Shipping
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Product and Cart Totals */}
        <div className='flex flex-col items-center gap-2 px-2'>
          {[
            {src:"/Rectangle 34 (1).png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
            {src:"/Rectangle 144.png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
            {src:"/Rectangle 145.png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
            {src:"/Rectangle 146.png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
            {src:"/Rectangle 147.png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
          ].map((products, index) => (
            <div
             key={index}
             className="flex items-center gap-4 w-full md:w-[369px] bg-white shadow-sm"
             style={{width:"369px", height:"102px"}}>
           {/* Product Image */}
            <div className='pb-2'>
            <Image
            src={products.src}
            alt={products.title}
            width={83}
            height={87}
            className="flex-shrink-0"
            />
            </div>
            {/* Product Details */}
            <div className='flex-1'>
            <h3 className='text-black font-medium text-[14px]'>{products.title}</h3>
            <p className='text-brandPrimary3 font-medium text-[14px]'>{products.description1}</p>
            <p className='text-brandPrimary3 font-medium text-[14px]'>{products.description2}</p>
            </div>
            {/* Product Price */}
            <div>
              <p className='text-brandPrimary2 font-medium text-[14px]'>$32.00</p>
            </div>
        </div>
      ))}
      {/* Cart Totals Section */}
      <div className='w-full md:max-w-[371px] py-8'>
      <div className='bg-[#E8E6F1] flex flex-col px-6 py-6'>
                <div className='flex justify-between shadow-sm my-6'>
                <p className='text-brandPrimary2 font-semibold text-[18px]'>Subtotals:</p>
                <p className='text-[#15245E] font-medium text-[16px]'>£219.00</p>
                </div>
                <div className='flex justify-between shadow-sm my-4'>
                <p className='text-brandPrimary2 font-semibold text-[18px]'>Totals:</p>
                <p className='text-[#15245E] font-medium text-[16px]'>£325.00</p>
                </div>
                <div className='flex gap-1 my-3'>
                <Circle className='w-2 h-2 fill-[#19D16F] stroke-[#19D16F] mt-1'/>
                <p className='text-brandPrimary3 font-medium text-[12px]'>Shipping & taxes calculated at checkout</p>
                </div>
                <div className='my-5'>
                <Button className='bg-[#19D16F] text-white text-[14px] font-bold hover:bg-green-400 transition-all duration-300 md:w-[312px] md:h-[40px]'>
                Proceed To Checkout
                </Button>
                </div>
              </div>
              </div>
          </div>
      </div>
      </div>
        </section>
  );
};

export default HektoDemo; 