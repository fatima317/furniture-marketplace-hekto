import React from 'react';
import { Input } from '@/components/ui/input';
import { TbCategoryFilled } from 'react-icons/tb';
import Image from "next/image";
import {Button} from "@/components/ui/button"
import {Check, Circle, Heart, List, Search, ShoppingCart, Star} from 'lucide-react'
import MiddleFour from '@/components/ui/middleFour';


const ShopLeftSidebar = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
         {/* Header Section */}
         <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Shop Left Sidebar
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Shop Left Sidebar
            </p>
          </div>
        </div>
      </div>
       {/* Product Toolbar */}
       <div className='max-w-[1171px] mx-auto md:ml-14 flex flex-col md:flex-row md:justify-between pt-20 pb-10 px-4 md:px-16'>
           {/* Title and Results */}
          <div>
          <h3 className='font-bold text-[22px] text-brandPrimary2 tracking-tight'>Ecommerce Accessories & Fashion item</h3>
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
         {/* Sidebar and Content */}
        <div className='flex flex-col md:flex-row gap-4 max-w-[1171px] mx-auto px-4 md:px-7 py-10'>
          {/* Sidebar */}
        <aside className='flex flex-col md:w-[30%]'>
          {/* Product Brand Section */}
          <div className='flex flex-col'>
            <h3 className='text-brandPrimary2 font-bold text-[20px] underline mt-4'>Product Brand</h3>
            {/* Example brands */}
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#E5E0FC] stroke-[#603EFF] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Coaster Furniture</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#E5E0FC] stroke-[#603EFF] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Fusion Dot High Fashion</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#E5E0FC] stroke-[#603EFF] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Unique Furnitture Restor</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#E5E0FC] stroke-[#603EFF] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Dream Furnitture Flipping</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#E5E0FC] stroke-[#603EFF] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Young Repurposed</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#E5E0FC] stroke-[#603EFF] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Green DIY furniture</p>
            </div>
          </div>

          {/* Discount Offer Section */}
          <div className='flex flex-col'>
            <h3 className='text-brandPrimary2 font-bold text-[20px] underline mt-8'>Discount Offer</h3>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>20% Cashback</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>5% Cashback Offer</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>25% Discount Offer</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-brandPrimary2 font-bold text-[20px] underline mt-8'>Rating Item</h3>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFF6DA] stroke-[#FFCC2E] w-4 h-4'/>
            <div className='flex flex-wrap gap-1'>
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              <p className='text-black text-[12px] font-medium'>(2341)</p>
              </div>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFCC2E] stroke-[#FFF6DA] w-4 h-4'/>
            <div className='flex flex-wrap gap-1'>
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              <p className='text-black text-[12px] font-medium'>(1726)</p>
              </div>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFF6DA] stroke-[#FFCC2E] w-4 h-4'/>
            <div className='flex flex-wrap gap-1'>
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              <p className='text-black text-[12px] font-medium'>(258)</p>
              </div>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFF6DA] stroke-[#FFCC2E] w-4 h-4'/>
            <div className='flex flex-wrap gap-1'>
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              <p className='text-black text-[12px] font-medium'>(25)</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-brandPrimary2 font-bold text-[20px] underline mt-8'>Categories</h3>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Prestashop</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Magento</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='stroke-[#FFDBF1] bg-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Bigcommerce</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>osCommerce</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>3dcart</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Bags</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='stroke-white w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Accessories</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='stroke-white w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Jewellery</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>Watches</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-brandPrimary2 font-bold text-[20px] underline mt-8'>Price Filter</h3>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>$0.00 - $150.00</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>$150.00 - $350.00</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='stroke-[#FFDBF1] bg-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>$150.00 - $504.00</p>
            </div>
            <div className='flex gap-2 mt-4'>
            <Check className='bg-[#FFDBF1] stroke-[#FF3EB2] w-4 h-4'/>
            <p className='text-brandPrimary3 text-[16px] font-medium'>$450.00 +</p>
            </div>
            <div className='flex mt-4'>
            <div className='relative'style={{ width: '203px', height: '31px' }}>
            <Input className=' stroke-[#BCBDDB]' type='search' />
            <Search className='stroke-[#BCBDDB] w-5 h-6 absolute top-2 right-4' />
            </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-brandPrimary2 font-bold text-[20px] underline mt-8'>Filter By Color</h3>
            <div className='flex gap-3'>
            <div className='flex gap-1 mt-4'>
            <Circle className='w-3 h-5 fill-[#5E37FF] stroke-[#5E37FF]'/>
            <p className='text-brandPrimary3 text-[15px] font-medium'>Blue</p>
          </div>
          <div className='flex gap-1 mt-4'>
            <Circle className='w-3 h-5 fill-[#FF9437] stroke-[#FF9437]'/>
            <p className='text-brandPrimary3 text-[15px] font-medium'>Orange</p>
          </div>
          <div className='flex gap-1 mt-4'>
            <Circle className='w-3 h-5 fill-[#FFBF95] stroke-[#FFBF95]'/>
            <p className='text-brandPrimary3 text-[15px] font-medium'>Brown</p>
          </div>
          </div>
          <div className='flex gap-3'>
          <div className='flex gap-1 mt-4'>
            <Circle className='w-3 h-5 fill-[#33D221] stroke-[#33D221]'/>
            <p className='text-brandPrimary3 text-[15px] font-medium'>Green</p>
          </div>
          <div className='flex gap-1 mt-4'>
            <Circle className='w-3 h-5 fill-[#E248FF] stroke-[#E248FF]'/>
            <p className='text-brandPrimary3 text-[15px] font-medium'>Purple</p>
          </div>
          <div className='flex gap-1 mt-4'>
            <Circle className='w-3 h-5 fill-[#26CBFF] stroke-[#26CBFF]'/>
            <p className='text-brandPrimary3 text-[15px] font-medium'>Sky</p>
          </div>
          </div>
          </div>
        </aside>
            {/* Product Grid */}
          <div className="flex flex-col gap-8 justify-center mb-36">
        {[
          { src: '/Rectangle 32 (7).png', title: 'Dictum morbi', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (8).png', title: 'Sodales sit', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (9).png', title: 'Nibh varius', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (10).png', title: 'Mauris quis', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (11).png', title: 'Morbi sagittis', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (12).png', title: 'Ultricies venenatis', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (13).png', title: 'Scelerisque dignissim', price: '$52.00', discount: '$26.00' },
        ].map((products, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center p-4 gap-5 md:px-4 md:pt-10 shadow-sm md:w-[921px] md:h-[230px]">
            
          {/* Image */}
         <div>
         <Image
         src={products.src}
         alt={products.title}
         width={284}
         height={197}
         className="object-contain" 
         />
         </div>
        {/* Product Details */}
        <div className="max-w-[591px] flex flex-col items-center md:items-start">
          {/* Product Title and Colors */}
        <div className='flex flex-wrap gap-4 mb-2'>
        <h3 className="text-[#151875] font-bold text-[18px]">{products.title}</h3>
        <div className='flex flex-wrap gap-1'>
        <Circle className='w-3 h-7 stroke-[#DE9034] fill-[#DE9034]'/>
        <Circle className='w-3 h-7 stroke-[#E60584] fill-[#E60584]'/>
        <Circle className='w-3 h-7 stroke-[#5E37FF] fill-[#5E37FF]'/>
        </div>
        </div>
        {/* Price and Ratings */}
        <div className='flex flex-wrap gap-4 mb-4'>
              <span className='text-[#151875] font-medium text-[14px]'>{products.discount}</span>
              <span className='text-[#FB2448] font-medium text-[14px] line-through'>{products.price}</span>
              <div className='flex flex-wrap gap-1'>
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              </div>
        </div>
        <p className='text-brandPrimary3 text-[16px] font-medium mb-2 md:mb-4 md:pr-8 text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        <div className='flex gap-4 md:gap-10 mt-2'>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-white'
                style={{
                  width: '20px',
                  height:'20px',
                }}
              >
               <ShoppingCart className='w-4 h-4 stroke-brandPrimary2' />
              </Button>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-white'
                style={{
                  width: '20px',
                  height:'20px',
                }}
              >
               <Heart className='w-4 h-4 stroke-brandPrimary2'/>
              </Button>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-white'
                style={{
                  width: '20px',
                  height:'20px',
                }}
              >
               <Search className='w-4 h-4 stroke-brandPrimary2'/>
              </Button>
        </div>
        </div>
              </div>
              ))}
              </div>
              </div>
        
      <MiddleFour />
      </section>
  );
};

export default ShopLeftSidebar; 