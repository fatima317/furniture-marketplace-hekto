import Image from 'next/image';
import { ArrowLeft, ArrowRight, Calendar, Mail, PenTool, Search, Star, User } from "lucide-react";
import React from 'react';
import { Input } from '@/components/ui/input';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import MiddleFour from '@/components/ui/middleFour';
import { BiComment, BiRectangle } from 'react-icons/bi';
import { Button } from '@/components/ui/button';

const SingleBlog = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
       {/* Header Section */}
       <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Single Blog
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Single Blog
            </p>
          </div>
        </div>
      </div>
      {/* Main Content Section */}
      <div className='flex flex-wrap pt-20 pb-10 px-4 md:px-24 md:gap-8'>
         {/* Left Content */}
        <div className='w-full md:max-w-[870px] md:w-[68%]'>
        <div className='flex flex-col md:px-4'>
          {/* Main Blog Image */}
          <Image 
          src="/bruce-mars-FWVMhUa_wbY-unsplash 2.png" 
          alt='picture' 
          width={870} 
          height={453}
          className="w-full" // Make image responsive
          />
          <div className="flex gap-6 my-4">
            {/* Tags Section */}
            <div className='flex gap-2 items-center'>
            <PenTool className="stroke-[#FB2E86] w-4 h-4 -rotate-90" />
            <p className='text-brandPrimary2 text-[14px] font-medium bg-[#FFE7F9] px-4 py-1'>Surf Auxion</p>
            </div>
            <div className='flex gap-2 items-center'>
            <Calendar className="stroke-[#FFA454] w-4 h-4" />
            <p className='text-brandPrimary2 text-[14px] font-medium bg-[#FFECE2] px-4 py-1'>Aug 09 2020</p>
            </div>  
          </div>
           {/* Blog Content */}
          <h2 className='text-brandPrimary2 text-[20px] md:text-[24px] lg:text-[30px] font-bold mb-4 tracking-tight'>Mauris at orci non vulputate diam tincidunt nec.</h2>
          <p className='text-brandPrimary3 text-[14px] font-medium my-4 tracking-tight'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
           eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
          </p>
          <p className='text-brandPrimary3 text-[14px] font-medium my-8 tracking-tight'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit
          morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
          platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, 
          </p>
          {/* Blockquote Section */}
          <div className='bg-[#FAFAFB] py-8 px-4 border-2 border-l-brandPrimary1 my-8'>
            <p className='text-brandPrimary3 italic text-[15px] font-semibold leading-loose tracking-tight'>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
              toamk risusu”
            </p>
          </div>
          {/* Blog Content Images */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              {src:'/Group 92.png'},
              {src:'/Group 140.png'},
            ].map((products, index) => (
              <div key={index} className="w-full">
                <Image
                src={products.src}
                alt={'Image'}
                width={417.74}
                height={245}
                className="w-full"
                />
              </div>
            ))}     
          </div>
          {/* Blog Additional Section */}
          <p className='text-brandPrimary3 text-[14px] font-medium my-8 tracking-tight'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit
          morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
          platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, 
          </p>
          {/* Responsive Cards */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {[
              {src:'/Rectangle 63.png', title:'Quam sed'},
              {src:'/Rectangle 63 (1).png', title:'Tristique sed'},
              {src:'/Rectangle 63 (2).png', title:'A etiam'},
              {src:'/Rectangle 63 (3).png', title:'Mi nisi'},
            ].map((products, index) => (
              <div
               key={index}
               className="flex flex-col items-center px-3 md:w-[209.54px] md:h-[319.53]">
                <div className='my-4'>
                <Image
                src={products.src}
                alt={products.title}
                width={209.54}
                height={254.7}
                />
                </div>
                <h3 className='text-black font-medium text-[18px] px-2 my-2 tracking-tight'>{products.title}</h3>
                <div className='flex gap-4 px-4'>
                  <div className='flex gap-2'>
                  <p className='text-[#232A69] text-[14px] font-medium tracking-tight'>$32.00</p>
                  <p className='text-brandPrimary1 line-through text-[14px] font-medium tracking-tight'>$56.00</p>
                  </div>
                  <div className='flex'>
                    <Star className='w-3 h-4 stroke-transparent fill-[#FFC416]'/>
                    <Star className='w-3 h-4 stroke-transparent fill-[#FFC416]'/>
                    <Star className='w-3 h-4 stroke-transparent fill-[#FFC416]'/>
                    <Star className='w-3 h-4 stroke-transparent fill-[#FFC416]'/>
                    <Star className='w-3 h-4 stroke-transparent fill-[#B2B2B2]'/>
                  </div>
                </div>
              </div>
            ))}     
          </div>
          <p className='text-brandPrimary3 font-medium text-[14px] my-8 tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
          <p className='text-brandPrimary3 font-medium text-[14px] my-4 tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
          </div>
          <div className='flex px-2 gap-4 my-8 items-center justify-center'>
            <div className='bg-[#5625DF] rounded-full w-6 h-6'><FaFacebookF className='fill-white w-6 h-6 p-1'/></div>
            <div className='bg-[#FF27B7] rounded-full w-6 h-6'><FaInstagram className='fill-white w-6 h-6 p-1'/></div>
            <div className='bg-[#37DAF3] rounded-full  w-6 h-6'><FaTwitter className='fill-white w-6 h-6 p-1'/></div>
          </div>
          <div className='bg-[#F7F8FB] w-ful md:w-[882.69px] h-[45px] flex justify-between px-2'>
            <div className='flex items-center gap-1'>
            <ArrowLeft className='stroke-brandPrimary3 w-4 h-4'/>
            <p className='text-brandPrimary3 font-medium text-[14px]'>Previous Post</p>
            </div>
            <div className='flex items-center gap-1'>
            <p className='text-brandPrimary3 font-medium text-[14px]'>Next Post</p>
            <ArrowRight className='stroke-brandPrimary3 w-4 h-4' />
            </div>
          </div>
          <div className='flex flex-col gap-4 my-20'>
            {[
              {src:'/Rectangle 59.png', title:'Sapien ac', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.', date:'Jan 09 2020'},
              {src:'/Rectangle 59 (1).png', title:'Sapien ac', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.', date:'Aug 18 2020'},
            ].map((products, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-wrap gap-4 shadow-lg p-4 md:w-[667.68px] md:h-[137.16px]">
            <div>
              <Image
                src={products.src}
                alt={products.title}
                width={103.16}
                height={106.56}
                />
            </div>
            <div className='flex flex-col my-4'>
              <div className='flex gap-2 items-center'>
              <h3 className='text-brandPrimary2 font-semibold text-[18px]'>{products.title}</h3>
              <p className='text-[#A3A2B6] text-[13px] font-medium'>{products.date}</p>
              </div>
              <div className='md:w-[506px] tracking-wide leading-loose'>
              <p className='text-[#A3A2B6] font-medium text-[12px]'>{products.description}</p>
              </div>
            </div>
            </div>
            ))}
          </div>
          <div className='max-w-[717px] flex flex-col my-8'>
          <div className='md:flex md:gap-8 md:mb-12'>
            <div className='flex items-center relative'>
            <User className='w-4 h-4 stroke-brandPrimary3 absolute ml-2'/>
            <Input className='md:w-[341.64px] h-[42.71px] rounded-none' type='text' placeholder='    Your Name*'/>
            </div>
            <div className='flex items-center relative'>
            <Mail className='w-4 h-4 stroke-brandPrimary3 absolute ml-2' />
            <Input className='md:w-[341.64px] h-[42.71px] rounded-none' type='text' placeholder='    Write Your Email*'/>
            </div>
          </div>
            <div className='flex items-center relative'>
            <BiComment className='w-4 h-4 stroke-brandPrimary3 absolute ml-4'/>
            <Input className='w-[717px] h-[205.66px] rounded-none' type='text' placeholder='      Write your comment*'/>
            </div>
            <div className='flex gap-1 my-4'>
              <BiRectangle className='w-4 h-4 stroke-brandPrimary3'/>
              <p className='text-[13px] font-medium text-brandPrimary3'>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <div className='my-8 px-2'>
            <Button className="bg-brandPrimary1 text-white font-medium text-sm text-center rounded shadow-sm hover:bg-pink-600 transition-all duration-300 md:w-[697.89px] md:h-[49.45px]">
            Continue Shipping
            </Button>
            </div>
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
          <h3 className='text-brandPrimary2 text-[22px] font-semibold my-4'>Categories</h3>
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

export default SingleBlog; 