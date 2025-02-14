"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { addToCart } from "@/app/actions/action";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import Link from "next/link";
import { Heart, ShareIcon } from "lucide-react";

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      image,
      price,
      description,
      discountPercentage,
      stockLevel,
      category
    }`,
    { slug }
  );
}

async function getRelatedProducts(category: string, currentProductId: string): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product" && category == $category && _id != $currentProductId][0...4]{
      _id,
      name,
      image,
      price,
      slug
    }`,
    { category, currentProductId }
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    async function fetchProduct() {
      if (typeof slug === 'string') {
        const fetchedProduct = await getProduct(slug);
        setProduct(fetchedProduct);
        const related = await getRelatedProducts(fetchedProduct.category, fetchedProduct._id);
        setRelatedProducts(related);
      }
    }
    fetchProduct();
  }, [slug]);

  if (!product) return <div className="text-center py-20 text-xl">Loading...</div>;

  const handleIncrement = () => {
    if (quantity < product.stockLevel) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 2000,
    });
    addToCart({ ...product, quantity });
  };
 
  const handleBuyNow = () => {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "Proceeding to checkout...",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
      router.push('/checkout');
      }
    });
  };

  const discountedPrice = (
    Number(product.price) -
    (Number(product.price) * product.discountPercentage) / 100
  ).toFixed(2);


  return (
    <section className="max-w-6xl mx-auto p-4 md:p-10">
      <div className="bg-white shadow-lg rounded-lg p-6 md:flex">
        <div className="w-full md:w-1/2 flex justify-center">
          {product.image && (
            <Image src={urlFor(product.image).url()} alt={product.name} width={400} height={400} className="rounded-lg shadow-md" />
          )}
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4">
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
          <div className="mt-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-xl font-bold text-purple-600">
                  ${discountedPrice}
                </p>
                <div className="flex gap-6">
                  <p className="text-gray-500 line-through">${product.price}</p>
                  <p className="text-red-500 font-medium">-{product.discountPercentage}% OFF</p>
                </div>
              </>
            ) : (
              <p className="text-xl font-bold text-purple-600">${product.price}</p>
            )}
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Button
              onClick={handleDecrement}
              className="bg-gray-200 text-black w-8 h-8 rounded-full font-bold"
            >
              -
            </Button>
            <span className="text-lg">{quantity}</span>
            <Button
              onClick={handleIncrement}
              className="bg-gray-200 text-black w-8 h-8 rounded-full font-bold"
            >
              +
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-all"
            >
              Add to Cart
            </Button>
            <Button
              onClick={handleBuyNow}
              className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition-all"
            >
              Buy Now
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Heart className="w-6 h-6 text-gray-500 cursor-pointer hover:text-red-500" />
            <ShareIcon className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-500" />
          </div>
          <div className="mt-10">
        <h2 className="text-xl font-bold">Description</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold my-10 text-center">Related Products</h2>
      <div className="flex flex-wrap gap-6 mt-4 items-center justify-center">
        {relatedProducts.map((p) => (
          <Link key={p._id} href={`/product/${p.slug.current}`}>
            <div className="border p-4 rounded-lg" style={{ width: 200, height: 300 }}>
              {p.image && (
                <Image src={urlFor(p.image).url()} alt={p.name} width={150} height={150} />
                )}
              <h3 className="text-center mt-2 px-4">{p.name}</h3>
              <p className="text-center text-purple-600">${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}