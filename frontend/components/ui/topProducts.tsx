import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { topProduct } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Furniture() {
  const products: Product[] = await client.fetch(topProduct);

  return (
    <div className="max-w-[1920px] mx-auto bg-white py-8">
      {/* Page Title */}
      <h2 className="text-center text-[32px] lg:text-[42px] font-bold text-[#151875] mb-10">
       Top Products
      </h2>

      {/* Product Grid */}
      <div className="flex flex-wrap items-center justify-center m-4 gap-20">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center justify-center bg-no-repeat bg-top"
            style={{
              width: '269px',
              height: '345px',
              backgroundImage:`url('/top categories.png')`,
              backgroundSize: "262px 269px",
 
            }}
          >
            <Link href={`/product/${product.slug.current}`}>
              {/* Product Image */}
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={178}
                  height={177}
                  className="mx-auto my-2 object-cover"
                />
              )}

              {/* Product Details */}
              <div className="mt-4">
              <h3 className="text-[16px] text-center font-bold text-brandPrimary2 mt-4 px-4">
                {product.name}
              </h3> 
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


