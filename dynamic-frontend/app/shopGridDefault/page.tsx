import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button"
import {Heart, List, Search, ShoppingCart } from 'lucide-react'
import { Input } from '@/components/ui/input';
import { TbCategoryFilled } from 'react-icons/tb';
import MiddleFour from '@/components/ui/middleFour';

const ShopGridDefault = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
        {/* Header Section */}
        <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Shop Grid Default
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Shop Grid Default
            </p>
          </div>
        </div>
      </div>
        {/* Product Toolbar */}
        <div className='max-w-[1171px] mx-auto md:ml-14 flex flex-col md:flex-row md:justify-between pt-20 pb-10 px-4 md:px-16'>
           {/* Title and Results */}
          <div>
          <h3 className='font-bold text-[18px] md:text-[22px] text-brandPrimary2 tracking-tight'>Ecommerce Accessories & Fashion item</h3>
          <p className='text-brandPrimary3 text-sm font-normal'>About 9,620 results (0.62 seconds)</p>
          </div>
          {/* Filters */}
          <div className='flex flex-wrap gap-4 md:gap-6 items-center'>
          <div className='flex items-center gap-2'>
            <span className='text-[#3F509E] text-[16px] font-medium'>Per Page:</span>
            <span><Input type='text' className='w-[55px] h-[25px] rounded-none' /></span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-[#3F509E] text-[16px] font-medium'>Sort By:</span>
            <span><Input type='select' prefix='Best Match' className='w-[96px] h-[28px] rounded-none'/></span>
          </div>
          <div className='flex items-center gap-2'>
             <span className='text-[#3F509E] text-[16px] font-medium'>View:</span>
             <span><TbCategoryFilled className='stroke-brandPrimary2 h-6 w-5'/></span>
             <span><List className='stroke-brandPrimary2 h-6'/></span>
             <span><Input className='w-[162px] h-[30px] rounded-none'/></span>
          </div>
          </div>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 px-6 md:px-28 py-10">
        {[
          { src: '/image 9.png', width:201, height:201, title: 'Vel elit euismod', price: '$42.00', discount: '$26.00' },
          { src: '/image 1165.png',  width:169, height:169, title: 'Ultricies condimentum imperdiet', price: '$42.00', discount: '$26.00' },
          { src: '/image 1173.png',  width:201, height:201, title: 'Vitae suspendisse sed', price: '$42.00', discount: '$26.00' },
          { src: '/10011 1.png',  width:188, height:188, title: 'Sed at fermentum', price: '$42.00', discount: '$26.00' },
          { src: '/unnamed 1.png',  width:128, height:139, title: 'Fusce pellentesque at', price: '$42.00', discount: '$26.00' },
          { src: '/1562173100.png',  width:154, height:158, title: 'Vestibulum magna laoreet', price: '$42.00', discount: '$26.00' },
          { src: '/purepng 1.png',  width:114, height:144, title: 'Sollicitudin amet orci', price: '$42.00', discount: '$26.00' },
          { src: '/image 1164.png',  width:167, height:167, title: 'Ultrices mauris sit', price: '$42.00', discount: '$26.00' },
          { src: '/fcp0 2.png',  width:170, height:151, title: 'Pellentesque condimentum ac', price: '$42.00', discount: '$26.00' },
          { src: '/cam 2.png',  width:169, height:158, title: 'Cras scelerisque velit', price: '$42.00', discount: '$26.00' },
          { src: '/czNmcy.png',  width:176, height:176, title: 'Lectus vulputate faucibus', price: '$42.00', discount: '$26.00' },
          { src: '/10011 1.png',  width:188, height:188, title: 'Purus risus, ut', price: '$42.00', discount: '$26.00' },
        ].map((products, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-no-repeat bg-top transition-transform duration-300 hover:scale-105 mb-4"
            style={{
              width: '270px',
              height: '363px',
              backgroundImage: index === 1 ?`url('/Rectangle 35.png')` :  `url('/Rectangle 35@2x.png')`,
              backgroundSize: "270px 280px", // Adjust the size of the background image
            }}
            >
            {/* Image */}
    <div className="flex items-center justify-center h-[201px] mb-6 mt-16">
      <Image
        src={products.src}
        alt={products.title}
        width={products.width}
        height={products.height}
        className="object-contain" 
      />
      </div>
      {index === 1 && (
              <div  className="absolute bottom-24 left-4 flex flex-col gap-20">
              <div className='flex flex-col gap-1'>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-white'
                style={{
                  width: '30px',
                  height:'30px',
                }}
              >
               <ShoppingCart className='w-4 h-4 stroke-brandPrimary2' />
              </Button>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-[#EBF4F3]'
                style={{
                  width: '30px',
                  height:'30px',
                }}
              >
               <Heart className='w-4 h-4 stroke-brandPrimary2'/>
              </Button>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-[#EBF4F3]'
                style={{
                  width: '30px',
                  height:'30px',
                }}
              >
               <Search className='w-4 h-4 stroke-brandPrimary2'/>
              </Button>
              </div>
              </div>
              )}
              {/* Content Container */}
              <div className="flex flex-col flex-grow justify-between items-center text-center">
              <h3 className="text-[#151875] font-bold text-[16px] tracking-tight mb-2">
              {products.title}
              </h3>

              <Image
                src={"/Group 44.png"}
                alt={"rating bar"}
                width={42}
                height={10}
                className="mx-auto mb-2"
              />
              <div className='flex gap-2 mt-2'>
              <span className='text-[#151875] font-medium text-[14px]'>
                {products.price}
              </span>
              <span className='text-[#FB2448] font-medium text-[14px] line-through'>
                {products.discount}
              </span>
              </div>
              </div>
              </div>
            ))}
        </div>
        <MiddleFour />
        </section>
  );
};

export default ShopGridDefault; 