import Image from "next/image";

export default function TrendingProductsTwo() {
  return (
    <section className="max-w-[1920px] mx-auto bg-white py-8">
      {/* Main container for products */}
      <div className="flex flex-wrap items-center m-4 px-6">
        
        {/* First product card with background and overlay */}
        <div className="relative  w-full md:w-[420px]">
          {/* Background image */}
          <Image
            src={"/275 off amonf offers.png"}
            alt={"background"}
            width={420}
            height={270}
            objectFit="cover"
            className="w-full h-auto" // Makes it responsive
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-36 mr-8">
            <h3 className="text-brandPrimary2 text-[20px] md:text-[24px] font-semibold mr-1">
              23% off in all products
            </h3>
            <button className="text-brandPrimary1 underline text-[12px] md:text-[14px] font-semibold mr-48">
              Shop Now
            </button>
          </div>
          {/* Floating image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center ml-40 mt-8">
            <Image
              src={"/image 1162.png"}
              alt={"item"}
              width={213}
              height={207}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Second product card with background and overlay */}
        <div className="relative  w-full md:w-[420px]">
          {/* Background image */}
          <Image
            src={"/275 off amonf offers (1).png"}
            alt={"background"}
            width={420}
            height={270}
            objectFit="cover"
            className="w-full h-auto"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center mr-8 mb-36">
            <h3 className="text-brandPrimary2 text-[20px] md:text-[24px] font-semibold mr-1">
              23% off in all products
            </h3>
            <button className="text-brandPrimary1 underline mr-40 text-[12px] md:text-[14px] font-semibold">
              View Collection
            </button>
          </div>
          {/* Floating image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center ml-10 mt-16">
            <Image
              src={"/image 1161.png"}
              alt={"item"}
              width={312}
              height={173}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Small product cards section */}
        <div className="flex flex-col items-center justify-center gap-4 p-2">
          {[
            { src: '/image 30 (1).png', title: 'Executive Seat chair', description: '$32.00' },
            { src: '/image 19 (1).png', title: 'Executive Seat chair', description: '$32.00' },
            { src: '/image 28 (1).png', title: 'Executive Seat chair', description: '$32.00' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center gap-4"
              style={{
                width: '267px',
                height: '74px',
                backgroundImage: `url('/Rectangle 101.png')`,
                backgroundSize: "107px 74px", // Adjust the size of the background image
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
              }}
            >
              {/* Small product image */}
              <div className="px-2">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={67}
                  height={67}
                  className="mx-auto"
                  style={{
                    width: index === 0 ? '64px' : '67px',
                    height: index === 0 ? '71px' : '67px',
                  }}
                />
              </div>
              {/* Small product details */}
              <div
                className="flex flex-col items-center"
                style={{
                  width: "151px",
                  height: "33px",
                }}
              >
                <h3 className="text-[14px] font-semibold text-[#151875] ml-2">
                  {item.title}
                </h3>
                <p className="text-[#151875] font-medium text-[10px] mr-24">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
