"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductsData from "@/api/ProductData";
import { BsBag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

interface Product {
  id: number;
  image: string;
  Title: string;
  Price: string;
  DiscountedPrice: string;
  Product: string;
}

const ProductPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? ProductsData
      : ProductsData.filter((product) => product.Product === selectedCategory);

  return (
    <>
      <section className="p-6">
        <div className="text-center m-4">
          <h1 className="font-bold text-4xl">Latest Products</h1>
        </div>
        {/* Filter Section */}
        <div className="flex justify-center space-x-4 mb-6 mt-3 flex-wrap">
          <button
            className="bg-transparent text-black hover:text-primaryColor py-2 px-4 "
            onClick={() => setSelectedCategory("All")}
          >
            All Products
          </button>
          <button
            className="bg-transparent text-black hover:text-primaryColor  py-2 px-4 "
            onClick={() => setSelectedCategory("Fruit")}
          >
            Fruits
          </button>
          <button
            className="bg-transparent text-black hover:text-primaryColor  py-2 px-4 "
            onClick={() => setSelectedCategory("Vegetable")}
          >
            Vegetables
          </button>
          <button
            className="bg-transparent text-black hover:text-primaryColor  py-2 px-4 "
            onClick={() => setSelectedCategory("Nuts")}
          >
            Nuts
          </button>
          <button
            className="bg-transparent text-black hover:text-primaryColor  py-2 px-4 "
            onClick={() => setSelectedCategory("other")}
          >
            OTHER PRODUCTS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product) => (
            <div
              key={product.id}
              className="relative flex flex-col items-center bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-primaryColor group"
            >
              {/* Product Image */}
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.Title}
                  width={160}
                  height={100}
                  layout="intrinsic"
                  className="w-4/5 h-4/5 object-cover rounded-md"
                />
              </Link>

              {/* Product Title */}
              <h3 className="pt-1 text-xl font-semibold text-center">
                {product.Title}
              </h3>

              {/* Product Price */}
              <div className="flex justify-center pt-1 text-center">
                <span className="text-lg font-medium text-gray-600 line-through mr-2">
                  {product.Price || "-"}
                </span>
                {product.DiscountedPrice ? (
                  <span className="text-lg font-bold text-primaryColor">
                    {product.DiscountedPrice}
                  </span>
                ) : (
                  <span className="text-lg font-medium text-gray-600">
                    - Loading -
                  </span>
                )}
              </div>

              {/* Hover Box with Icons */}
              <div className="absolute inset-x-0 flex left-10 bottom-28 justify-evenly items-center p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 bg-gray-100 shadow-lg rounded-full w-3/4">
                <Link href={`/product/${product.id}`} className=" px-1  ">
                  <BsBag className="text-black" size={16} />
                </Link>
                <Link
                  href={"/Login"}
                  className=" border-x px-5  border-gray-500 "
                >
                  <CiHeart className="text-black" size={16} />
                </Link>
                <button className="px-1 ">
                  <CiSearch className="text-black" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <Link
            href={"/all-products"}
            className="bg-transparent text-primaryColor px-7 py-2 text-lg font-semibold hover:bg-primaryColor hover:text-white transition duration-300 border border-primaryColor"
          >
            View all
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
