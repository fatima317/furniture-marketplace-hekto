'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button";
import MiddleFour from '@/components/ui/middleFour';

const NotFound = () => {
  const route = useRouter();
  
  return (
    <section className="max-w-[1920px] mx-auto">
      {/* Header Section */}
      <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            404 Not Found
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              404 Not Found
            </p>
          </div>
        </div>
      </div>

      {/* 404 Image Section */}
      <div className="max-w-[90%] md:max-w-[913px] mx-auto flex justify-center mt-10 md:mt-16">
        <Image 
          src={"/Group 123.png"} 
          alt="404"
          width={913}
          height={644}
          className="w-full h-auto"
        />
      </div>

      {/* Back To Home Button */}
      <div className="flex justify-center mb-20">
        <Button
          onClick={() => route.push('/')}
          className="bg-brandPrimary1 text-white font-medium text-[14px] md:text-[16px] rounded shadow-sm hover:bg-pink-600 transition-all duration-300"
          style={{ width: "165px", height: "44px" }}
        >
          Back To Home
        </Button>
      </div>

      {/* MiddleFour Component */}
      <MiddleFour />
    </section>
  );
};

export default NotFound;
