import React from "react";
import Image from "next/image";

const MiddleOne = () => {
  return (
    <section className="max-w-[1920px] mx-auto bg-white py-8">
      {/* Title */}
      <h2 className="text-center text-[32px] sm:text-[42px] font-bold text-[#151875] mb-10">
        What Hekto Offer!
      </h2>

      {/* Flex container for offering items */}
      <div className="flex flex-wrap items-center justify-center gap-4 m-6">
        {/* Loop through offering items */}
        {[
          { src: "/cashback 1.png", title: "Affordable Prices" },
          { src: "/premium-quality 1.png", title: "Premium Quality" },
          { src: "/24-hours-support 1.png", title: "24/7 Support" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-4 rounded-md flex flex-col items-center justify-center"
            // Added responsive width and height
            style={{ width: "270px", height: "320px" }}
          >
            {/* Image */}
            <div className="mb-4">
              <Image
                src={item.src}
                alt={item.title}
                width={65} // Fixed width for the image
                height={65} // Fixed height for the image
                className="mx-auto"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#151875]">{item.title}</h3>

            {/* Description */}
            <p className="text-[#15187567] text-sm mt-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiddleOne;
