"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/products";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const productsPerPage = 6;

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <input type="text" placeholder="Search..." className="w-full p-2 border rounded-md mb-4" onChange={(e) => setSearch(e.target.value)} />
      <div className="grid grid-cols-3 gap-6">
        {paginatedProducts.map((p) => (
          <Link key={p._id} href={`/product/${p.slug.current}`}>
            <div className="border p-4 rounded-lg">
              {p.image && (
                <Image src={urlFor(p.image).url()} alt={p.name} width={200} height={200} />
              )}
              <h3 className="text-center mt-2">{p.name}</h3>
              <p className="text-center text-purple-600">${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-4">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className="border px-4 py-2 rounded-md">Previous</button>
        <span>{currentPage}</span>
        <button onClick={() => setCurrentPage((prev) => prev + 1)} className="border px-4 py-2 rounded-md">Next</button>
      </div>
    </div>
  );
}