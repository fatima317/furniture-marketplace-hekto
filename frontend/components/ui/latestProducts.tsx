import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button"
import {Heart, Search, ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
const LatestProducts = () => {
  return (
        <section className="max-w-[1920px] mx-auto bg-white py-8">
            {/* Title */}
            <h2 className="text-center text-[32px] lg:text-[42px] font-bold text-[#151875] mb-10">
              Latest Products
            </h2>
            
            {/* CATEGORIES */}
            <div className="flex flex-row items-center mb-6 lg:px-96 px-2">
                {["New Arrival", "Best Seller", "Featured", "Special Offer"
                    ].map((category, index) => (
                    <div key={index} 
                    className="text-brandPrimary2 text-[16px] lg:text-[18px] flex flex-col items-center"
                    style={{
                        width: '527px',
                        height: '22px',
                        color: index === 0 ? '#FB2E86' : '#151875',
                        textDecoration: index === 0 ? 'underline' : 'none'}}>
                        {category}
                    </div>
                ))}
            </div>
    
            {/* PRODUCTS */}
            <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:gap-28 lg:px-40 py-4">
            {[
              { src: "/image 1166 (1).png", title: "Comfort Handy Craft", price: "$42.00", originalPrice:"$65.00"},
              { src: "/image 15.png", title: "Comfort Handy Craft", price: "$42.00", originalPrice:"$65.00"},
              { src: "/image 1168.png", title: "Comfort Handy Craft", price: "$42.00", originalPrice:"$65.00"},
              { src: "/image 23.png", title: "Comfort Handy Craft", price: "$42.00", originalPrice:"$65.00"},
              { src: "/image 32.png", title: "Comfort Handy Craft", price: "$42.00", originalPrice:"$65.00"},
              { src: "/image 3 (1).png", title: "Comfort Handy Craft", price: "$42.00", originalPrice:"$65.00"},
            ].map((products, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center"
            style={{
              width: '360px',
              height: '306px',
              backgroundImage: index === 1 ?`url('')` : `url('/Frame 1 (1).png')` , // No background for other images
              backgroundSize: index === 1 ? "277px, 370px" : "270px"
            }}
            >
                    {/* Image */}
            <div className="mt-24">
              <Image
                src={products.src}
                alt={products.title}
                width={285} 
                height={220} 
                objectFit='contain'
                className="mx-auto"
                style={{
                  width: index === 0 || index === 1 || index === 2 || index === 3? '222px' : '285px', 
                  height: index === 0 || index === 1 || index === 2 || index === 3? '222px' : '220px',
                }}
              />
              </div>
              {index === 1 && (
              <div  className="absolute top-8 left-4 flex flex-col gap-20">
                <div>
              <Badge 
              variant="destructive" 
              className='bg-[#3F509E] text-white flex items-center justify-center font-bold text-sm' 
              style={{ 
                width: '84.87px',
                height: '56.73px',
                border: '1px solid #3F509E',
                clipPath: "polygon(98% 10%, 98% 56%, 2% 87%, 2% 41%)",
              }}>
              Sale</Badge>
              </div>
              <div className='flex flex-col gap-2'>
              <Button
                 size="icon" variant="secondary" className='rounded-full'
                style={{
                  width: '30px',
                  height:'30px',
                }}
              >
               <ShoppingCart className='w-19 h-19 stroke-[#2F1AC4]' />
              </Button>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-white'
                style={{
                  width: '30px',
                  height:'30px',
                }}
              >
               <Heart className='w-17 h-17 stroke-[#2F1AC4]'/>
              </Button>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-white'
                style={{
                  width: '30px',
                  height:'30px',
                }}
              >
               <Search className='w-15 h-15 stroke-[#2F1AC4]'/>
              </Button>
              </div>
              </div>
              )}
              <div className='flex items-center justify-between gap-8 mt-16 mb-10 sm:mb-16'>
              <p className="text-[#151875] font-semibold text-[14px]">
              {products.title}
              </p>
              <div className='flex gap-2'>
              <span className='text-[#151875] font-semibold text-[14px]'>
                {products.originalPrice}
              </span>
              <span className='text-[#FB2448] font-semibold text-[14px] '>
                {products.price}
              </span>
              </div>
              </div>
              </div>
            ))}
            </div>
        </section>
  )
}

export default LatestProducts