"use client"
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { allProducts} from '@/sanity/lib/queries';
import { Product } from '@/types/products';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { addToCart } from '@/app/actions/action';
import Swal from "sweetalert2";
import {Button} from "@/components/ui/button";
import Image from 'next/image';

const Furniture = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 2000
    });
    addToCart(product);
  };

  return (
    <div className='max-w-[1920px] mx-auto bg-white py-8'>
      {/* Page Title */}
      <h2 className='text-center text-[32px] lg:text-[42px] font-bold text-[#151875] mb-10'>Featured Products</h2>
      
      {/* Product Grid */}
      <div className="flex flex-wrap items-stretch justify-center gap-6 px-4">
        {product.map((product) => (
          <div key={product._id} 
          className="flex flex-col items-center justify-between shadow-lg bg-no-repeat bg-top p-4 rounded-md transition-transform duration-300 hover:scale-105"
          style={{
            width: '270px',
            height: '361px',
            backgroundImage: `url('/Rectangle 91.png')`,
            backgroundSize: "270px 216px", // Adjust the size of the background image
          }}>
            <Link href={`/product/${product.slug.current}`}>
              {/* Product Image */}
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mx-auto object-fill my-6" 
                />
              )}
              
              {/* Product Details */}
                <h3 className="text-[18px] text-center font-bold text-brandPrimary2 mt-6">{product.name}</h3>
                <p className="text-[#151875] font-medium text-[14px] text-center mt-2">{product.description}</p>
              
              {/* Add to Cart Button */}
              <Button 
                className='min-w-full mt-4 bg-purple-950 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-400 transition-all'
                onClick={(e) => handleAddToCart(e, product)}>
                Add to Cart
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furniture;
