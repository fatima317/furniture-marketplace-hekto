import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Circle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
  return (
    <section className='max-w-[1920px] mx-auto'>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Contact Us
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Contact Us
            </p>
          </div>
        </div>
      </div>
        <div className="max-w-[1191px] md:h-[490px] mx-auto grid md:grid-cols-2 py-10 gap-4 px-7">
          {/* Information About Us */}
          <div className="flex flex-col items-start mt-4">
            <h2 className="text-[#101750] text-[28px] md:text-[36px] font-bold mb-4">Information About us</h2>
            <p className="text-[14px] font-semibold max-w-[550px] text-brandPrimary3 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada
              diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
              quis bibendum quam.
            </p>
            <div className="flex flex-row gap-4 mb-6">
              <Circle className="fill-[#5625DF] w-[25px] h-[25px] stroke-none" />
              <Circle className="fill-brandPrimary1 w-[25px] h-[25px] stroke-none" />
              <Circle className="fill-[#37DAF3] w-[25px] h-[25px] stroke-none" />
            </div>
          </div>

          {/* Contact Way */}
          <div className="mt-4 ml-16">
            <h2 className="text-[#101750] text-[28px] md:text-[36px] font-bold mb-6">Contact Way</h2>
            <div className="flex flex-wrap max-w-[489px] items-start gap-6">
              <div className="flex flex-wrap gap-2 mb-6">
                <Circle className="fill-[#5625DF] w-[45px] h-[45px] stroke-none" />
                <div>
                  <p className="text-[14px] font-semibold text-brandPrimary3 ">Tel: 877-67-88-99</p>
                  <p className="text-[14px] font-semibold text-brandPrimary3 ">E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Circle className="fill-brandPrimary1 w-[45px] h-[45px] stroke-none" />
                <div>
                  <p className="text-[14px] font-semibold text-brandPrimary3 ">Support Forum</p>
                  <p className="text-[14px] font-semibold text-brandPrimary3 ">For over 24hr</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Circle className="fill-[#FFB265] w-[45px] h-[45px] stroke-none" />
                <div>
                  <p className="text-[14px] font-semibold text-brandPrimary3 ">20 Margaret st, London</p>
                  <p className="text-[14px] font-semibold text-brandPrimary3 ">Great britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Circle className="fill-[#1BE982] w-[45px] h-[45px] stroke-none" />
                <div>
                  <p className="text-[14px] font-semibold text-brandPrimary3 ">Free standard shipping</p>
                  <p className="text-[14px] font-semibold text-brandPrimary3 ">on all orders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="md:col-span-2 mt-16">
            <h2 className="text-[#101750] text-[28px] md:text-[36px] font-bold">Get In Touch</h2>
            <p className="text-[14px] font-semibold text-brandPrimary3 max-w-[550px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae
              eget dolor los vitae lobortis quis bibendum quam.
            </p>
          </div>
        </div>
        <div className='md:flex gap-2'>
          {/* Contact Form */}
        <div className='max-w-[534px] flex flex-col md:ml-24 items-start py-10'>
          <div className='md:flex md:flex-wrap md:gap-2 mb-6'>
          <Input
          type='text'
          placeholder='Your Name*'
          className='md:w-[220px] md:h-[45px]'
           />
           <Input
          type='email'
          placeholder='Your E-mail'
          className='md:w-[220px] md:h-[45px]'
           />
          </div>
          <Input
          type='textarea'
          placeholder='Subject*'
          className='md:h-[45px] mb-6'
           />
            <Input
          type='textarea'
          placeholder='Type Your Messege*'
          className='md:h-[116px] mb-6'
           />
          <Button  className="bg-brandPrimary1 text-white font-medium text-[16px] rounded shadow-sm hover:bg-pink-600 transition-all duration-300 md:w-[157px] md:h-[44px]">
            Send Mail
          </Button>
        </div>
         {/* Image Section */}
          <div className='md:-mt-36 px-8 md:mb-40'>
          <Image
          src={"/Group 124.png"}
          alt='picture'
          width={723}
          height={692} 
          />
          </div>
        </div>
    </section>
  );
};

export default ContactUs;
