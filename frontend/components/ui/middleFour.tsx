import React from 'react';
import Image from 'next/image';

const MiddleFour = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-white py-8">
      {/* Wrapper for centered image */}
      <div className="flex items-center justify-center px-4">
        <Image
          src="/image 1174.png"
          alt="footer-logo"
          width={904}
          height={93}
          className="w-full max-w-[904px] h-auto" // Make image responsive
        />
      </div>
    </div>
  );
};

export default MiddleFour;
