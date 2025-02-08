import { CheckIcon } from 'lucide-react';
import React from 'react';
import { Button } from "@/components/ui/button";
import MiddleFour from '@/components/ui/middleFour';
import Image from 'next/image';

const OrderCompleted = () => {
  return (
    <section className="max-w-[1920px] mx-auto">
      {/* Header Section */}
      <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Order Completed
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Order Completed
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-wrap items-center justify-center py-10 md:py-20 mx-auto mt-8 md:mt-12">
        {/* Left Section: Clock Image */}
        <div className="w-full md:w-auto px-6 md:px-16 -mt-16 md:-mt-48 flex justify-center md:justify-start">
          <Image 
            src="/clock 1.png" 
            alt="clock" 
            width={94} 
            height={94} 
            className="w-[60px] md:w-[94px] h-auto" // Responsive clock image
          />
        </div>

        {/* Center Section: Text and Icon */}
        <div className="max-w-[90%] md:max-w-[625px] flex flex-col items-center justify-center text-center px-4 md:px-0">
          {/* Check Icon */}
          <div className="mb-6 mt-4">
            <CheckIcon className="stroke-brandPrimary1 w-[36px] md:w-[46px] h-[36px] rounded-full" />
          </div>
          {/* Order Completed Title */}
          <h3 className="text-[#101750] font-bold text-[24px] md:text-[36px] mb-4">
            Your Order Is Completed!
          </h3>
          {/* Description */}
          <p className="text-brandPrimary3 font-semibold text-[14px] md:text-[16px] mb-8">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
          </p>
          {/* Button */}
          <div className="flex justify-center mb-10 md:mb-20">
            <Button
              className="bg-brandPrimary1 text-white font-medium text-[14px] md:text-[16px] rounded shadow-sm hover:bg-pink-600 transition-all duration-300"
              style={{ width: "208px", height: "59px" }}
            >
              Continue Shopping
            </Button>
          </div>
        </div>

        {/* Right Section: Checklist Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-end px-6 md:px-16 -mb-16 md:-mb-96">
          <Image
            src="/checklist 1.png"
            alt="checklist"
            width={70}
            height={70}
            className="w-[50px] md:w-[70px] h-auto" // Responsive checklist image
          />
        </div>
      </div>

      {/* MiddleFour Component */}
      <MiddleFour />
    </section>
  );
};

export default OrderCompleted;
