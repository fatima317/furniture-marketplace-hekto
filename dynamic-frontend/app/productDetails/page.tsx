import React from 'react';
import Image from "next/image";
import {ArrowRight, Heart, Star} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import MiddleFour from '@/components/ui/middleFour';
const ProductDetails = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
        {/* Header Section */}
        <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Product Details 
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Product Details
            </p>
          </div>
        </div>
      </div>
        {/* Product Details Section */}
        <div className='max-w-[1170px] bg-white flex flex-wrap shadow-2xl mx-4 md:mx-10 lg:mx-28 my-10'>
           {/* Side Images */}
          <div className='flex flex-col gap-3 p-2'>
            {[
              {src: "/Rectangle 134.png" },
              {src: "/Rectangle 136.png" },
              {src: "/Rectangle 137.png" },
            ].map((products, index) => (
              <div
            key={index}>
          {/* Image */}
         <div>
         <Image
         src={products.src}
         alt={"product"}
         width={151}
         height={155}
         className="object-contain" 
         />
         </div>
         </div>
              ))}
          </div>
          {/* Main Product Image */}
          <div className='p-2'>
          <Image
         src={"/Rectangle 138.png"}
         alt={"product"}
         width={375}
         height={487}
         className="object-contain" 
         />
          </div>
          {/* Product Info */}
          <div className='md:max-w-[549px] w-full md:mx-auto flex flex-col py-20 mx-4'>
            <h2 className="text-[24px] md:text-[36px] font-semibold text-[#0D134E] mt-4">Playwood arm chair</h2>
            <div className='flex gap-1 mt-2'>
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <p className='text-brandPrimary2 text-[14px] font-medium'>(22)</p>
              </div>
              <div className='flex gap-8 mt-2'>
              <span className='text-[#151875] font-medium text-[16px]'>$32.00</span>
              <span className='text-[#FB2448] font-medium text-[16px] line-through'>$32.00</span>
              </div>
              <p className='text-[#0D134E] text-[16px] font-semibold mt-2'>Color</p>
              <p className='text-brandPrimary3 text-[16px] font-semibold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
              <div className='flex gap-6 mt-4 items-center justify-center'>
              <p className='text-brandPrimary2 text-[16px] font-semibold'>Add To cart</p>
              <Heart className='w-5 h-5 stroke-brandPrimary3' />
              </div>
              <p className='text-brandPrimary2 text-[16px] font-semibold mt-4'>Categories:</p>
              <p className='text-brandPrimary2 text-[16px] font-semibold mt-4'>Tags</p>
              <div className='flex gap-4'>
              <p className='text-brandPrimary2 text-[16px] font-semibold mt-4'>Share</p>
              <div className='flex gap-4 mt-5'>
                <div className='bg-[#151875] rounded-full w-4 h-4'><FaFacebookF className='fill-white w-4 h-4 p-1'/></div>
                <div className='bg-[#FF27B7] rounded-full w-4 h-4'><FaInstagram className='fill-white w-4 h-4 p-1'/></div>
                <div className='bg-[#151875] rounded-full  w-4 h-4'><FaTwitter className='fill-white w-4 h-4 p-1'/></div>
                </div>
              </div>
          </div>
        </div>
        {/* Description Section */}
        <div className='bg-[#F9F8FE] maz-w-[1920px] py-20'>
          <div className='md:max-w-[1153px] md:mx-auto mx-2 flex flex-col'>
          <div className='flex gap-6 md:gap-14 mb-10'>
            <h3 className='font-semibold text-brandPrimary2 text-[16px] md:text-[24px] underline'>Description</h3>
            <h3 className='font-semibold text-brandPrimary2 text-[16px] md:text-[24px]'>Additional Info</h3>
            <h3 className='font-semibold text-brandPrimary2 text-[16px] md:text-[24px]'>Reviews</h3>
            <h3 className='font-semibold text-brandPrimary2 text-[16px] md:text-[24px]'>Video</h3>
          </div>
            <h3 className='font-semibold text-brandPrimary2 text-[16px] md:text-[22px] mb-2'>Varius tempor.</h3>
            <p className='text-brandPrimary3 text-sm md:text-[16px] font-semibold mb-6 tracking-tight'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <h3 className='font-semibold text-brandPrimary2 text-[16px] md:text-[22px] mb-2'>More details</h3>
            <div className='flex gap-2 mb-1'>
              <ArrowRight />
              <p className='text-brandPrimary3 font-semibold text-sm md:text-[16px] tracking-tight'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className='flex gap-2 mb-1'>
              <ArrowRight className='stroke-[#2F1AC4]'/>
              <p className='text-brandPrimary3 font-semibold text-sm md:text-[16px] tracking-tight'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className='flex gap-2 mb-1'>
              <ArrowRight />
              <p className='text-brandPrimary3 font-semibold text-sm md:text-[16px] tracking-tight'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className='flex gap-2'>
              <ArrowRight />
              <p className='text-brandPrimary3 font-semibold text-sm md:text-[16px] tracking-tight'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
          </div>
        </div>
         {/* Related Products */}
        <div className='flex flex-col py-20 md:mx-24 mx-auto'>
          <h2 className='text-[#101750] font-bold text-[24px] md:text-[36px] mb-6 px-4'>Related Products</h2>
          <div className='flex flex-wrap items-center'>
            {[
              {src:"/Rectangle 128.png", title:"Mens Fashion Wear",price:"$43.00"},
              {src:"/Group 233.png", title:"Women’s Fashion",price:"$67.00"},
              {src:"/Rectangle 130.png", title:"Wolx Dummy Fashion",price:"$67.00"},
              {src:"/Rectangle 131.png", title:"Top Wall Digital Clock",price:"$51.00"},
            ].map((products, index) => (
                <div
                    key={index}
                    className="relative flex flex-col px-2">

                {/* Image */}
                <div className='mb-4'>
                  <Image
                     src={products.src}
                     alt={products.title}
                     width={270}
                     height={340}
                     className="object-contain" 
                  />
                </div>
                <div className='flex md:gap-2 gap-4'>
                <h3 className='text-brandPrimary2 font-semibold text-sm md:text-[16px] mb-1 md:mb-2'>{products.title}</h3>
                <div className='flex gap-1'>
                  <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
                  <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
                  <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
                  <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]'
                  style={{fill: index === 2 ? "#B2B2B2" : "#FFC416"}} />
                  <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' 
                  style={{fill: index === 1 ? "#FFC416" : "#B2B2B2"}}/>
                </div>
                </div>
                <p className='text-brandPrimary2 text-xs md:text-[13px] font-medium mb-2'>{products.price}</p>
          </div>
        ))}
        </div>
        </div>

        <MiddleFour />
      </section>
  );
};

export default ProductDetails; 