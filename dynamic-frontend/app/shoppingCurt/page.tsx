import React from 'react';
import Image from "next/image";
import { Circle } from 'lucide-react';
import { GrClose } from 'react-icons/gr';
import { Button } from '@/components/ui/button';
const ShoppingCurt = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
        {/* Header Section */}
        <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Shopping Cart
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Shopping Cart
            </p>
          </div>
        </div>
      </div>
       {/* Cart Items Section */}
      <div className='py-10 px-2 md:py-20'>
        {/* Table Headers */}
      <div className='flex flex-wrap gap-4 md:gap-20 md:ml-32 mb-8'>
        <h3 className='text-brandPrimary2 text-[16px] md:text-[20px] font-bold'>Product</h3>
        <h3 className='text-brandPrimary2 text-[16px] md:text-[20px] font-bold md:ml-28 ml-32 '>Price</h3>
        <h3 className='text-brandPrimary2 text-[16px] md:text-[20px] font-bold'>Quantity</h3>
        <h3 className='text-brandPrimary2 text-[16px] md:text-[20px] font-bold'>Total</h3>
      </div>
      {/* Product List */}
      <div className='flex flex-wrap items-start md:gap-20 gap-10'>
      <div className='flex flex-col md:ml-32'>
        {[
          {src:"/Rectangle 34.png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
          {src:"/Rectangle 35 (1).png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
          {src:"/Rectangle 36.png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
          {src:"/Rectangle 37.png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
          {src:"/Rectangle 38.png", title:"Ut diam consequat", description1:"Color:Brown", description2:"Size:XL"},
        ].map((products, index) => (
           <div
             key={index}
             className="relative flex flex-row items-center gap-4 shadow-sm py-4">
             {/* Product Image */}
            <div className='relative'>
            <GrClose className='bg-black stroke-white rounded-full md:ml-16 -mt-2 px-1 w-5 h-5 absolute' />
            <Image
            src={products.src}
            alt={products.title}
            width={83}
            height={87}
            />
            </div>
            {/* Product Details */}
            <div className='flex flex-col'>
            <h3 className='text-black font-medium text-xs md:text-[14px]'>{products.title}</h3>
            <p className='text-brandPrimary3 font-medium text-xs md:text-[14px]'>{products.description1}</p>
            <p className='text-brandPrimary3 font-medium text-xs md:text-[14px]'>{products.description2}</p>
            </div>
            {/* Product Price */}
            <div>
              <p className='text-brandPrimary2 font-medium text-xs md:text-[14px] md:ml-9 -ml-4'>$32.00</p>
            </div>
            {/* Quantity Selector */}
            <div className='md:ml-20'>
              <Image
               src={"/Group 248.png"}
               alt='quantity bar'
               width={51}
               height={15}
               />
            </div>
            {/* Total Price */}
            <div>
              <p className='text-[#15245E] font-medium text-xs md:text-[14px] md:ml-20'>£219.00</p>
            </div>
            </div>
            ))}
            {/* Action Buttons */}
            <div className='flex flex-wrap justify-between'>
            <div className='mt-8'>
            <Button className="bg-brandPrimary1 text-white font-medium text-sm rounded shadow-sm hover:bg-pink-600 transition-all duration-300 md:w-[134px] md:h-[39px]">
            Update Cart</Button>
            </div>
            <div className='mt-8'>
            <Button className="bg-brandPrimary1 text-white font-medium text-sm rounded shadow-sm hover:bg-pink-600 transition-all duration-300 md:w-[134px] md:h-[39px]">
            Clear Cart</Button>
            </div>
            </div>
          </div>
            <div className='max-w-[371px] bg-white'>
              {/* Cart Totals Section */}
              <h3 className='text-brandPrimary2 text-[20px] font-bold md:ml-24 py-4 md:-mt-20'>Cart Totals</h3>
              <div className='bg-[#E8E6F1] flex flex-col px-6 py-6'>
                <div className='flex flex-wrap justify-between shadow-sm pt-8 pb-2'>
                <p className='text-brandPrimary2 font-semibold text-[18px]'>Subtotals:</p>
                <p className='text-[#15245E] font-medium text-[16px]'>£219.00</p>
                </div>
                <div className='flex flex-wrap justify-between shadow-sm pt-8 pb-2'>
                <p className='text-brandPrimary2 font-semibold text-[18px]'>Totals:</p>
                <p className='text-[#15245E] font-medium text-[16px]'>£325.00</p>
                </div>
                <div className='flex gap-1 py-4'>
                <Circle className='w-2 h-2 fill-[#19D16F] stroke-[#19D16F] mt-1'/>
                <p className='text-brandPrimary3 font-medium text-[12px]'>Shipping & taxes calculated at checkout</p>
                </div>
                <div className='mt-6 mb-2'>
                <Button className='bg-[#19D16F] text-white text-[14px] font-bold hover:bg-green-400 transition-all duration-300' 
                style={{width:"312px", height:"40px"}}>
                Proceed To Checkout
                </Button>
                </div>
              </div> 
              <h3 className='text-brandPrimary2 text-[20px] font-bold md:ml-24 py-4'>Calculate Shopping</h3>
              <div className='bg-[#F4F4FC] flex flex-col px-6 py-6'>
                <div className='flex flex-wrap shadow-sm pt-8 pb-2'>
                <p className='text-[#C5CBE3] font-semibold text-[14px]'>Bangladesh</p>
                </div>
                <div className='flex flex-wrap shadow-sm pt-8 pb-2'>
                <p className='text-[#C5CBE3] font-semibold text-[14px]'>Mirpur Dhaka - 1200</p>
                </div>
                <div className='flex flex-wrap shadow-sm pt-8 pb-2'>
                <p className='text-[#C5CBE3] font-semibold text-[14px]'>Postal Code</p>
                </div>
                <div className='mt-7'>
                <Button className="bg-brandPrimary1 text-white font-medium text-sm rounded shadow-sm hover:bg-pink-600 transition-all duration-300" 
                style={{ width: "179px", height: "41px" }}>
                Calculate Shiping
                </Button>
                </div>
              </div> 
            </div>
      <div></div>
      <div></div>
      </div>
      </div>
        </section>
  );
};

export default ShoppingCurt; 