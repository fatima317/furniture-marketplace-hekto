import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MiddleFour from '@/components/ui/middleFour';
import React from 'react';

const MyAccount = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
        {/* Header Section */}
        <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            My Account
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              My Account
            </p>
          </div>
        </div>
      </div>
      
        {/* Main Content Section */}
        <div className='lg:max-w-[544px] max-w-full flex flex-col justify-center mx-auto py-20 items-center'>
          <h3 className='text-black font-bold text-2xl lg:text-[32px] text-center mb-2'>Login</h3>
          <p className='text-brandPrimary3 text-sm lg:text-[17px] font-medium text-center mb-8'>Please login using account detail below.</p>
          <Input placeholder='Email Address' type='text' className='mb-6 md:w-[432px] md:h-[57px]'/>
          <Input placeholder='Password'type='text' className='mb-6 md:w-[432px] md:h-[57px]'/>
          <p className='text-brandPrimary3 text-sm lg:text-[17px] font-medium mr-60 mb-2'>Forgot your password?</p>
          <Button  className="bg-brandPrimary1 text-white font-medium text-[14px] md:text-[16px] rounded shadow-sm hover:bg-pink-600 transition-all duration-300 md:w-[432px] md:h-[57px]">
            Sign In</Button>
          <p className='text-brandPrimary3 text-sm lg:text-[17px] font-medium text-center mt-4'>Don’t have an Account?Create account</p>
        </div>

        <MiddleFour />
        </section>
  );
};

export default MyAccount; 