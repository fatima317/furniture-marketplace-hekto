"use client"
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import React, { useEffect, useState } from 'react';
import { middleTwo } from '@/sanity/lib/queries';
import { Product } from '@/types/products';
import { addToCart } from '@/app/actions/action';
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";

const MiddleTwo = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(middleTwo);
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
    <div className="max-w-[1920px] mx-auto bg-[#F2F0FF]">
      {product.map((product) => (
        <div key={product._id} 
          className="flex flex-col md:flex-row items-center justify-center py-8 px-4 md:px-10 space-y-6 md:space-y-0">
          
          {/* Product Image */}
          {product.image && (
            <div className="flex-1 flex justify-center">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>
          )}

          {/* Product Description */}
          <div className="flex flex-col justify-between space-y-4 md:w-[492px] ">
            <h3 className="text-[28px] font-bold text-brandPrimary2">
              Unique Features Of Latest & Trending Products
            </h3>

            <p className="flex items-center text-brandPrimary3 text-sm font-medium gap-2">
              <Circle className="stroke-brandPrimary1 w-2 h-2 fill-brandPrimary1" />
              All frames constructed with hardwood solids and laminates
            </p>

            <p className="flex items-start text-brandPrimary3 text-sm font-medium gap-2">
              <Circle className="stroke-brandPrimary2 w-2 h-2 fill-brandPrimary2 mt-1" />
              Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails
            </p>

            <p className="flex items-center text-brandPrimary3 text-sm font-medium gap-2">
              <Circle className="stroke-[#2BF5CC] w-2 h-2 fill-[#2BF5CC]" />
              Arms, backs, and seats are structurally reinforced
            </p>

            {/* Add to Cart & Price */}
            <div className="flex gap-2">
              <Button 
                onClick={(e) => handleAddToCart(e, product)}
                className="bg-brandPrimary1 text-white font-semibold text-sm px-6 py-2 rounded-md shadow-sm hover:bg-pink-600 transition-all duration-300"
                style={{ width: "157px", height: "45px" }}>
                Add To Cart
              </Button>
              
              {/* Product Name and Price */}
              <div>
                <p className="text-xs font-bold text-brandPrimary2 pr-12">{product.name}</p>
                <p className="text-xs font-semibold text-brandPrimary2">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MiddleTwo;
