import Image from "next/image";
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="max-w-[1920px] bg-[#F2F0FF] md:h-[764px] h-auto items-center">
      <div className="flex w-full flex-wrap px-2">
        {/* Left Column: Lamp Image */}
      <div className="md:w-[15%] w-[30%]">
          <Image
            src="/lamp.png"
            alt="Lamp"
            width={287}
            height={287}
            objectFit="cover"
            className="object-contain"
          />
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-[44%] md:max-w-[644px] text-center md:text-left flex flex-col justify-center py-6">
        <p className="text-[16px] text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-4xl md:text-[48px] font-bold text-black tracking-tight mt-4">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="text-[#8A8FB9] text-sm md:text-[16px] font-medium mt-4 md:mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <div className="mt-4 md:mt-8">
          <Button className="bg-brandPrimary1 text-white font-semibold text-sm md:text-[17px] rounded shadow-sm hover:bg-pink-600 transition-all duration-300 md:w-[163px] md:h-[50px]">
            Shop Now
            </Button>
        </div>
      </div>
      {/* Right Column: Chair Image */}
      <div className="md:w-[40%] w-[65%] md:mt-28">
          <Image
            src="/sofa promotional header.png"
            alt="Furniture Chair"
            width={706}
            height={689}
            objectFit="cover"
            className="object-contain"
          />
      </div>
      </div>
    </section>
  );
};

export default Hero;
