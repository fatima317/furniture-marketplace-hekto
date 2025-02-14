"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [discountFilter, setDiscountFilter] = useState<string>("");
  const [priceSort, setPriceSort] = useState<string>("");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch("*[_type == 'product']");
      setProducts(fetchedProducts);
      const uniqueCategories = [...new Set(fetchedProducts.map(p => p.category))];
      setCategories(uniqueCategories);
    }
    fetchProducts();
  }, []);

  let filteredProducts = products;

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }
  if (discountFilter === "discounted") {
    filteredProducts = filteredProducts.filter(p => p.discountPercentage > 0);
  } else if (discountFilter === "non-discounted") {
    filteredProducts = filteredProducts.filter(p => p.discountPercentage === 0);
  }
  if (priceSort === "low-to-high") {
    filteredProducts = filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (priceSort === "high-to-low") {
    filteredProducts = filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
  }
  if (availabilityFilter === "available") {
    filteredProducts = filteredProducts.filter(p => p.stockLevel > 0);
  } else if (availabilityFilter === "out-of-stock") {
    filteredProducts = filteredProducts.filter(p => p.stockLevel === 0);
  }

  // Customization Filter (Disabled for Now)
  // if (customizationFilter === "customizable") {
  //   filteredProducts = filteredProducts.filter(p => p.customizationAvailable);
  // } else if (customizationFilter === "non-customizable") {
  //   filteredProducts = filteredProducts.filter(p => !p.customizationAvailable);
  // }

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold my-4">Explore Our Products</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-6">
        <div>
          <label className="mr-2">Category:</label>
          <select onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2 rounded">
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2">Discount:</label>
          <select onChange={(e) => setDiscountFilter(e.target.value)} className="border p-2 rounded">
            <option value="">All</option>
            <option value="discounted">Discounted</option>
            <option value="non-discounted">Non-Discounted</option>
          </select>
        </div>

        <div>
          <label className="mr-2">Sort by Price:</label>
          <select onChange={(e) => setPriceSort(e.target.value)} className="border p-2 rounded">
            <option value="">None</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        <div>
          <label className="mr-2">Availability:</label>
          <select onChange={(e) => setAvailabilityFilter(e.target.value)} className="border p-2 rounded">
            <option value="">All</option>
            <option value="available">Available</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>
        </div>

        {/* Customization Filter (Disabled for Now) */}
        {/* <div>
          <label className="mr-2">Customization:</label>
          <select onChange={(e) => setCustomizationFilter(e.target.value)} className="border p-2 rounded">
            <option value="">All</option>
            <option value="customizable">Customizable</option>
            <option value="non-customizable">Non-Customizable</option>
          </select>
        </div> */}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-6">
        {paginatedProducts.map((p) => (
          <Link key={p._id} href={`/product/${p.slug.current}`}>
            <div className="border p-4 rounded-lg">
                {p.image && (
                <Image src={urlFor(p.image).url()} alt={p.name} width={200} height={200} className="mx-auto" />
                )}
              <h3 className="text-center mt-2">{p.name}</h3>
              <p className="text-center text-purple-600">
                ${p.price} {p.discountPercentage > 0 && (
                  <span className="text-red-500">(-{p.discountPercentage}%)</span>
                )}
              </p>
              <p className="text-center text-gray-500">
                {p.stockLevel > 0 ? "In Stock" : "Out of Stock"}
              </p>
              {/* Future Customization Display */}
              {/* <p className="text-center text-blue-500">
                {p.customizationAvailable ? "Customizable" : "Non-Customizable"}
              </p> */}
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className="border px-4 py-2 rounded-md">
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={() => setCurrentPage((prev) => prev + 1)} className="border px-4 py-2 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
}
