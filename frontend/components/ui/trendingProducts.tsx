import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { trendingProduct } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Furniture() {
  const products: Product[] = await client.fetch(trendingProduct);

  return (
    <div className="max-w-[1920px] mx-auto bg-white py-8">
      {/* Page Title */}
      <h2 className="text-center text-[32px] lg:text-[42px] font-bold text-[#151875] mb-10">
        Trending Products
      </h2>

      {/* Product Grid */}
      <div className="flex flex-wrap items-center justify-center m-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center justify-center bg-slate-100 shadow-lg transition-shadow duration-300 hover:scale-105"
            style={{
              width: "260px",
              height: "320px",
            }}
          >
            <Link href={`/product/${product.slug.current}`}>
              {/* Product Image */}
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={197}
                  height={194}
                  className="mx-auto"
                />
              )}

              {/* Product Details */}
              <h3 className="text-[18px] text-center font-bold text-brandPrimary2 mt-6">
                {product.name}
              </h3>
                <p className="text-[#151875] font-semibold text-[14px] text-center">
                  ${product.price}
                </p>  

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


