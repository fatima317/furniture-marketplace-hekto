import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
      <section className='max-w-[1920px] mx-auto mb-44'>
        {/* Header Section */}
      <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            About Us
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              About Us
            </p>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className='flex flex-wrap justify-center py-20 px-5'>
        <div className='className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 md:mr-6'>
        <Image
        src={"/Group 73.png"} 
        alt='About Us Image' 
        width={570} 
        height={409} 
        />
        </div>
        <div className='w-full md:w-1/2 lg:w-2/5 flex flex-col mt-6 md:mr-16'>
          <h3 className='text-brandPrimary2 text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-4'>Know About Our Ecomerce Business, History</h3>
          <p className='text-brandPrimary3 text-[14px] md:text-[16px] font-medium mb-12 tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
          <Button  className="bg-brandPrimary1 text-white font-medium text-[14px] md:text-[16px] rounded shadow-sm hover:bg-pink-600 transition-all duration-300" 
          style={{ width: "145px", height: "44px" }}>Contact us</Button>
        </div>
      </div>
      {/* Features Section */}
      <div className='py-10 px-4'>
      <h2 className="text-center text-[32px] md:text-[36px] lg:text-[42px] font-bold text-black mb-10">Our Features</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Loop through offering items */}
        {[
          { src: "/free-delivery 1.png", title: "Free Delivery" },
          { src: "/cashback 1.png", title: "100% Cash Back" },
          { src: "/premium-quality 1.png", title: "Quality Product" },
          { src: "/24-hours-support 1.png", title: "24/7 Support" },
        ].map((item, index) => (
          <div
            key={index}
            className= {`bg-white shadow-lg p-4 rounded-none flex flex-col items-center justify-center ${
              index === 1 ? 'border-b-2 border-[#FF9100]' : ''
            }`}
            style={{ width: "270px", height: "320px",
            }}
          >
            {/* Feature Image */}
              <Image
                src={item.src}
                alt={item.title}
                width={65} // Fixed width for the image
                height={65} // Fixed height for the image
                className="m-4"
              />

            {/* Feature Title */}
            <h3 className="text-lg font-semibold text-[#151875]">{item.title}</h3>

            {/* Feature Description */}
            <p className="text-[#15187567] text-sm mt-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p> 
          </div>
        ))}
      </div>
      </div>
      {/* Testimonials Section */}
      <div className='py-12'>
      <div className='bg-[#FBFBFF] flex flex-col items-center justify-center py-12 px-4'>
        <h2 className="text-center text-[32px] md:text-[36px] lg:text-[42px] font-bold text-black mb-6">Our Client Say!</h2>
        <div className='max-w-[689px] text-center'>
        <Image src={"/Group 200.png"} alt='Client Photo' width={191} height={64} className="mx-auto mb-4"/>
          <h3 className='text-brandPrimary2 text-[20px] md:text-[22px] font-semibold'>Selina Gomez</h3>
          <p className='text-brandPrimary3 text-[10px] md:text-[12px] font-semibold mb-4'>Ceo At Webecy Digital</p>
          <p className='text-brandPrimary3 text-[14px] md:text-[16px] font-bold mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
        <Image src={"/Group 89.png"} alt='Divider' width={73} height={3} className="mx-auto mb-10"/>
        </div>
      </div>
      </div>
        </section>
  );
};

export default AboutUs; 