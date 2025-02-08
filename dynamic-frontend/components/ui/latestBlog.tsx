import { Calendar, PenTool } from "lucide-react";
import Image from "next/image";
import React from "react";

const LatestBlog = () => {
  return (
    <section className="max-w-[1920px] mx-auto bg-white py-8">
      {/* Title of the section */}
      <h1 className="text-center text-[32px] sm:text-[42px] font-bold text-[#151875] mb-10">
        Latest Blog
      </h1>
      
      {/* Container for the blog posts */}
      <div className="flex flex-wrap items-center justify-center gap-4 m-6">
        {[
          { src: "/blog1.png.png", title: "Top Essential Trends in 2021", author: "SaberAli " },
          { src: "/blog2.png.png", title: "Top Essential Trends in 2021", author: "Surfuxion" },
          { src: "/blog3.png.png", title: "Top Essential Trends in 2021", author: "SaberAli " },
        ].map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-sm shadow-md flex flex-col items-center"
            style={{ width: "370px", height: "493px" }} // Fixed dimensions for consistent design
          >
            {/* Image section */}
            <div className="mb-4">
              <Image
                src={post.src}
                alt={post.title}
                width={370} // Fixed image width
                height={255} // Fixed image height
                className="mx-auto"
              />
            </div>

            {/* Author and Date Info */}
            <div className="text-sm text-[#151875] flex items-center justify-center pr-28">
              <span><PenTool className="stroke-[#FB2E86] w-4 h-4" /></span>
              <p>{post.author}</p>
              <span><Calendar className="stroke-[#FFA454] w-4 h-4 lg:ml-8 ml-4" /></span>
              <p>21 August, 2020</p>
            </div>

            {/* Blog Title */}
            <h2
              className="text-[18px] font-semibold mt-4 pr-20"
              style={{
                color: index === 1 ? '#FB2E86' : '#151875', // Custom color for the second post
              }}
            >
              {post.title}
            </h2>

            {/* Blog Description */}
            <p className="text-[16px] text-[#15187567] mt-4 pr-20 pl-6">
              More of this less hello samlande lied much over tightly circa horse taped mightly.
            </p>

            {/* Read More Button */}
            <div className="flex items-center pr-60">
              <button
                className="text-[#15187567] underline mt-4 text-[16px]"
                style={{
                  color: index === 1 ? '#FB2E86' : '#151875', // Custom color for the second post
                }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
