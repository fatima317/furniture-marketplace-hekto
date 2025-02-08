import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { featuredProduct } from '@/sanity/lib/queries';
import { Product } from '@/types/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function Furniture() {
  const products: Product[] = await client.fetch(featuredProduct);

  return (
    <div className='max-w-[1920px] mx-auto bg-white py-8'>
      {/* Page Title */}
      <h2 className='text-center text-[32px] lg:text-[42px] font-bold text-[#151875] mb-10'>Featured Products</h2>
      
      {/* Product Grid */}
      <div className="flex flex-wrap items-stretch justify-center gap-6 px-4">
        {products.map((product) => (
          <div key={product._id} 
          className="flex flex-col items-center justify-between shadow-lg bg-no-repeat bg-top p-4 rounded-md transition-transform duration-300 hover:scale-105"
          style={{
            width: '270px',
            height: '361px',
            backgroundImage: `url('/Rectangle 91.png')`,
            backgroundSize: "270px 226px", // Adjust the size of the background image
          }}>
            <Link href={`/product/${product.slug.current}`}>
              {/* Product Image */}
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mx-auto object-fill my-10" 
                />
              )}
              
              {/* Product Details */}
                <h3 className="text-[18px] text-center font-bold text-brandPrimary2 mt-6">{product.name}</h3>
                <p className="text-[#151875] font-medium text-[14px] text-center mt-2">{product.description}</p>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
