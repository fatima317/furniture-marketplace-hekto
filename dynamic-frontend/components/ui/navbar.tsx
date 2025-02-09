'use client';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, Menu,  Heart, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showPageDropdown, setShowPageDropdown] = useState(false);

  return (
    <nav className="max-w-[1920px] mx-auto py-4 px-4 md:px-0">
      <div className="max-w-[1177px] h-[40px] hidden md:flex items-center justify-center gap-24">
        <h2 className="text-[36px] font-bold text-[#0D0E43] ml-32">Hekto</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#0D0E43]">
          {/* Home Dropdown */}
          <div
            className="relative flex items-center text-brandPrimary1"
          >
            {/* Home Link */}
            <p
              onClick={() => router.push('/')}
              className="text-[16px] font-medium cursor-pointer"
            >
              Home
            </p>

            {/* Chevron for Dropdown */}
            <ChevronDown
              className="w-5 h-4 cursor-pointer"
              onClick={() => setShowHomeDropdown(!showHomeDropdown)}
            />

            {/* Dropdown Menu */}
            {showHomeDropdown && (
              <div className="absolute top-full mt-2 bg-slate-50 shadow-lg rounded-none w-44 px-1">
                <Link
                  href="/myAccount"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  My Account
                </Link>
                <Link
                  href="/shoppingCurt"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  Shopping Cart
                </Link>
                <Link
                  href="/orderCompleted"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  Wishlist
                </Link>
                <Link
                  href="/aboutUs"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          {/* Pages */}
          <p>
            <Link href="/productList" className="text-[16px] font-medium">
            Explore Our Products
            </Link>
          </p>

          {/* Blog */}
          <p>
            <Link href="/blogPage" className="text-[16px] font-medium">
              Blog
            </Link>
          </p>

          {/* Shop */}
          <p>
            <Link href="/shopList" className="text-[16px] font-medium">
              Shop
            </Link>
          </p>

        </div>

        {/* Search Bar */}
        <div className="hidden md:flex ml-32">
          <div className="relative" style={{ width: '327px', height: '40px' }}>
            <Input type="search" className="bg-white text-black rounded-none" />
            <Search className="bg-[#FB2E86] absolute right-0 top-0 bottom-0 py-2 rounded-none stroke-white w-12 h-9" />
          </div>
        </div>
      </div>
      <Sheet>
            <SheetTrigger>
            <div className='flex md:hidden'>
            <Button variant={"outline"} size={"icon"}>
            <Menu className='size-4 text-gray-400'/>
            </Button>
            </div>
            </SheetTrigger>
            <SheetContent side={"right"}>
                <SheetHeader className='flex items-start'>
                    <SheetTitle>Hekto</SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-6 mt-6'>
                    <Link href={"/"} className='text-sm font-medium'>Home</Link>
                    <Link href={"/myAccount"} className='text-sm font-medium'>My Account</Link>
                    <Link href={"/shopGridDefault"} className='text-sm font-medium'>Shop</Link>
                    <Link href={"/productDetails"} className='text-sm font-medium'>Products</Link>
                    <div className="relative flex items-center">
                    <p onClick={() => router.push('/notFound')} className="text-sm font-medium cursor-pointer">Pages</p>
                    <ChevronDown className="w-5 h-4 cursor-pointer" onClick={() => setShowPageDropdown(!showPageDropdown)}/>
                    {showPageDropdown && (
                   <div className="absolute top-full mt-2 ml-12 px-4 bg-slate-100 w-40 shadow-lg rounded-none">
                    <Link href={"/shoppingCurt"} className='block text-sm font-medium mb-4 mt-4'> Shopping Cart</Link>
                    <Link href={"/orderCompleted"} className='block text-sm font-medium mb-4'>Order Completed</Link>
                    <Link href={"/shopList"} className='block text-sm font-medium mb-4'> Shop List</Link>
                    <Link href={"/shopLeftSidebar"} className='block text-sm font-medium mb-4'> Shop Left Sidebar</Link>
                    <Link href={"/singleBlog"} className='block text-sm font-medium mb-4'> Single Blog</Link>
                    <Link href={"/hektoDemo"} className='block text-sm font-medium mb-4'> Hekto Demo</Link>
                   </div>
                    )}
                    </div>
                    <Link href={"/blogPage"} className='text-sm font-medium'>Blog</Link>
                    <Link href={"/contactUs"} className='text-sm font-medium'>Contact</Link>
                    <Link href={"/aboutUs"} className='text-sm font-medium'> About Us</Link>
                    <Link href={"/faq"} className='text-sm font-medium'>FAQ</Link>
                <div className='mt-12'>
                <div className='relative'>
                <Input 
                placeholder='What are you looking for? ' 
                className='bg-[#F5F5F5] rounded text-sm font-extralight text-[#7D8184]'/>
                <Search className='absolute right-2 top-2 text-gray-600'/>
            </div>
                <div className='flex gap-4 mt-6'>
                <Button variant={"outline"} size={"icon"} className='rounded-full'>
                <Heart />
                </Button>
                <Button variant={"outline"} size={"icon"} className='rounded-full'>
                <ShoppingCart />
                </Button>
                </div>
                </div>
                </div>
            </SheetContent>
         </Sheet>
    </nav>
  );
};

export default Navbar;
