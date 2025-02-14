import Image from 'next/image';
import { Calendar, Circle, PenTool, Search } from "lucide-react";
import React from 'react';
import { Input } from '@/components/ui/input';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import MiddleFour from '@/components/ui/middleFour';

const BlogPage = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
       {/* Header Section */}
       <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Blog Page
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Blog Page
            </p>
          </div>
        </div>
      </div>
      {/* Main Blog Content */}
      <div className='flex flex-wrap pt-20 pb-10 px-4 md:px-24 md:gap-8'>
        {/* Blog Section */}
        <div className='w-full md:max-w-[870px] md:w-[68%]'>
           {/* Each Blog Post */}
           {[
            {
              image: "/bruce-mars-FWVMhUa_wbY-unsplash 2.png",
              title: "Mauris at orci non vulputate diam tincidunt nec.",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.",
            },
            {
              image: "/bruce-mars-FWVMhUa_wbY-unsplash 3.png",
              title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.",
            },
            {
              image: "/bruce-mars-FWVMhUa_wbY-unsplash 4.png",
              title: "Sit nam congue feugiat nisl, mauris amet nisi.",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.",
            },
          ].map((post, index) => (
          <div key={index} className="flex flex-col mb-12 md:px-4">
          <Image 
          src={post.image} 
          alt='Blog Image' 
          width={870} 
          height={453}
          className="w-full"
          />
          {/* Post Metadata */}
          <div className="flex gap-6 my-4">
            <div className='flex gap-2 items-center'>
            <PenTool className="stroke-[#FB2E86] w-4 h-4 -rotate-90" />
            <p className='text-brandPrimary2 text-[14px] font-medium bg-[#FFE7F9] px-4 py-1'>Surf Auxion</p>
            </div>
            <div className='flex gap-2 items-center'>
            <Calendar className="stroke-[#FFA454] w-4 h-4" />
            <p className='text-brandPrimary2 text-[14px] font-medium bg-[#FFECE2] px-4 py-1'>Aug 09 2020</p>
            </div>  
          </div>
          <h2 className='text-brandPrimary2 text-[24px] md:text-[30px] font-bold mb-4 tracking-tight'>{post.title}</h2>
          <p className='text-brandPrimary3 text-[15px] font-medium mb-6 tracking-tight'>{post.content}</p>
          <div className='flex items-center gap-2'>
            <h3 className='text-brandPrimary2 text-[16px] font-bold'>Read More </h3>
            <Circle className='fill-brandPrimary1 stroke-brandPrimary1 w-2 h-2'/>
          </div>
          </div>
          ))}
          <div className='flex items-center justify-center mt-10'>
          <Image 
          src="/Group 219.png" 
          alt='picture' 
          width={236} 
          height={24}
          />
          </div>
          </div>
         {/* Sidebar Section */} 
        <div className='flex flex-col'>
          {/* Search Box */}
          <h3 className='text-brandPrimary2 text-[22px] font-semibold mb-2'>Search</h3>
          <div className='relative' style={{ width: '270px', height: '40px' }}>
          <Input className='stroke-[#CBCBE0] mb-10 px-4 placeholder:text-[#CBCBE0] rounded-none' placeholder='Search For Posts' type='search'/>
          <Search className='w-4 h-4 right-3 top-3 stroke-[#CBCBE0] absolute'/>
          </div>
          {/* Categories */}
          <h3 className='text-brandPrimary2 text-[22px] font-semibold mb-2'>Categories</h3>
          <div className='flex flex-col mb-4'>
            <div className='flex mb-4 gap-4'>
              <div className='bg-[#F939BF] w-[122px] h-[30px] p-1.5'>
              <p className='text-[#3F509E] text-[14px] font-medium'>Hobbies (14)</p>
              </div>
              <div className='bg-white w-[122px] h-[30px] p-1.5'> 
                <p className='text-[#3F509E] text-[14px] font-medium'>Women (21)</p>
              </div>
            </div>
            <div className='flex gap-4 mb-4'>
              <div className='bg-white w-[122px] h-[30px] p-1.5'> 
                <p className='text-[#3F509E] text-[14px] font-medium'>Women (21)</p>
              </div>
              <div className='bg-white w-[122px] h-[30px] p-1.5'> 
                <p className='text-[#3F509E] text-[14px] font-medium'>Women (21)</p>
              </div>
            </div>
            <div className='flex gap-4 mb-4'>
              <div className='bg-white w-[122px] h-[30px] p-1.5'> 
                <p className='text-[#3F509E] text-[14px] font-medium'>Women (21)</p>
              </div>
              <div className='bg-white w-[122px] h-[30px] p-1.5'> 
                <p className='text-[#3F509E] text-[14px] font-medium'>Women (21)</p>
              </div>
            </div>
          </div>
          {/* Recent Posts */}
          <h3 className='text-brandPrimary2 text-[22px] font-semibold mb-4'>Recent Post</h3>
          <div className='flex flex-col gap-4'>
            {[
              {src:'/Rectangle 126.png', title:'It is a long established fact', description:'Aug 09 2020'},
              {src:'/Rectangle 126 (1).png', title:'It is a long established fact', description:'Aug 09 2020'},
              {src:'/Rectangle 126 (2).png', title:'It is a long established fact', description:'Aug 09 2020'},
              {src:'/Rectangle 126 (3).png', title:'It is a long established fact', description:'Aug 09 2020'},
            ].map((products, index) => (
              <div
               key={index}
               className="flex gap-2"
               style={{width:"250px", height:"51px"}}>
              <div>
              <Image
              src={products.src}
              alt={products.title}
              width={70}
              height={51}
              />
              </div>
            <div>
            <h3 className='text-[#3F509E] font-medium text-[14px]'>{products.title}</h3>
            <p className='text-brandPrimary3 font-semibold text-[11px]'>{products.description}</p>
            </div>
            </div>
            ))}
          </div>
          {/* Sale Product */}
          <h3 className='text-brandPrimary2 text-[22px] font-semibold mt-10 mb-4'>Sale Product</h3>
          <div className='flex flex-col gap-4'>
            {[
              {src:'/Rectangle 126 (4).png', title:'Elit ornare in enim mauris.', description:'Aug 09 2020'},
              {src:'/Rectangle 126 (5).png', title:'Viverra pulvinar et enim.', description:'Aug 09 2020'},
              {src:'/Rectangle 126 (6).png', title:'Mattis varius donec fdsfd', description:'Aug 09 2020'},
            ].map((products, index) => (
              <div
               key={index}
               className="flex gap-2"
               style={{width:"250px", height:"51px"}}>
              <div>
              <Image
              src={products.src}
              alt={products.title}
              width={70}
              height={51}
              />
              </div>
            <div>
            <h3 className='text-[#3F509E] font-medium text-[14px]'>{products.title}</h3>
            <p className='text-brandPrimary3 font-semibold text-[11px]'>{products.description}</p>
            </div>
            </div>
            ))}
          </div>
          {/* Offer Product */}
          <h3 className='text-brandPrimary2 text-[22px] font-semibold mt-10 mb-4'>Offer product</h3>
          <div className='grid grid-cols-2 grid-rows-1'>
            {[
              {src:'/p0OlRAAYXLY.png', title:'Duis lectus est.', description:'$12.00 - $15.00'},
              {src:'/Mask Group (3).png', title:'Sed placerat.', description:'$12.00 - $15.00'},
              {src:'/p0OlRAAYXLY (1).png', title:'Netus proin.', description:'$12.00 - $15.00'},
              {src:'/p0OlRAAYXLY (2).png', title:'Platea in.', description:'$12.00 - $15.00'},
            ].map((products, index) => (
              <div
               key={index}
               className="flex flex-col gap-2 mb-8"
               style={{width:"126px", height:"126px"}}>
              <div>
              <Image
              src={products.src}
              alt={products.title}
              width={126}
              height={80}
              />
              </div>
            <div>
            <h3 className='text-brandPrimary2 font-semibold text-[14px] text-center'>{products.title}</h3>
            <p className='text-brandPrimary3 font-semibold text-[12px] text-center'>{products.description}</p>
            </div>
            </div>
            ))}
          </div>
          {/* Social Icons */}
          <h3 className='text-brandPrimary2 text-[22px] font-semibold my-4'>Follow</h3>
          <div className='flex px-2 gap-4 mb-8'>
            <div className='bg-[#5625DF] rounded-full w-6 h-6'><FaFacebookF className='fill-white w-6 h-6 p-1'/></div>
            <div className='bg-[#FF27B7] rounded-full w-6 h-6'><FaInstagram className='fill-white w-6 h-6 p-1'/></div>
            <div className='bg-[#37DAF3] rounded-full  w-6 h-6'><FaTwitter className='fill-white w-6 h-6 p-1'/></div>
          </div>
          <h3 className='text-brandPrimary2 text-[22px] font-semibold my-4'>Tags</h3>
          <div className='flex gap-8'>
            <p className='text-brandPrimary2 font-medium text-[16px] underline'>General</p>
            <p className='text-brandPrimary1 font-medium text-[16px] underline'>Atsanil</p>
            <p className='text-brandPrimary2 font-medium text-[16px] underline'>Insas.</p>
          </div>
          <div className='flex gap-8'>
          <p className='text-brandPrimary2 font-medium text-[16px] underline'>Bibsaas</p>
          <p className='text-brandPrimary2 font-medium text-[16px] underline'>Nulla.</p>
          </div>
        </div>
      </div>
      <MiddleFour />
        </section>
  );
};

export default BlogPage; 