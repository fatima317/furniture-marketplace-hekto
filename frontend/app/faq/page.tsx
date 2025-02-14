import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MiddleFour from '@/components/ui/middleFour';
import React from 'react';

const FAQ = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
        {/* Header Section */}
        <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            FAQ
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              FAQ
            </p>
          </div>
        </div>
      </div>
       {/* FAQ and Ask a Question Section */}
      <div className='flex flex-wrap py-10 md:py-20 justify-center px-4 md:px-24'>
        {/* FAQ Section */}
        <div className='max-w-[90%] md:max-w-[499px] flex flex-col mx-auto'>
          <h2 className='text-[24px] md:text-[36px] font-bold text-[#1D3178] mb-10 md:mb-16'>Generel Information</h2>
           {/* FAQ Items */}
           {[
            {
              question: 'Eu dictumst cum at sed euismood condimentum?',
              answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
            },
            {
              question: 'Magna bibendum est fermentum eros.',
              answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
            },
            {
              question: 'Odio muskana hak eris conseekin sceleton?',
              answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
            },
            {
              question: 'Elit id blandit sabara boi velit gua mara?',
              answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
            },
          ].map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-[17px] font-bold text-[#1D3178] mb-2">{faq.question}</h3>
              <p className="text-brandPrimary3 text-sm md:text-[16px] font-medium">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Ask a Question Section */}
        <div className='max-w-[90%] md:max-w-[566px] bg-[#F8F8FD] flex flex-col mx-auto py-6 px-6 md:pl-10 md:pr-16 '>
          <h3 className='text-[20px] md:text-[24px] font-bold text-[#1D3178] mb-16 md:mb-28 mt-6'>Ask a Question</h3>
          <Input placeholder='Your Name' className='mb-10 bg-white md:w-[445px] md:h-[50px]' type='text'/>
          <Input placeholder='Subject' className='mb-10 bg-white md:w-[445px] md:h-[50px]' type='text'/>
          <Input placeholder='Type Your Message' className='mb-10 bg-white md:w-[445px] md:h-[157px]' type='text'/>
          <Button className="bg-brandPrimary1 text-white font-medium text-[14px] md:text-[16px] mb-10 rounded shadow-sm hover:bg-pink-600 transition-all duration-300 md:w-[156px] md:h-[48px]">
            Send Mail
            </Button>
        </div>
      </div>

      <MiddleFour />
        </section>
  );
};

export default FAQ; 