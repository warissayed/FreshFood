"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import ProductsData from "@/api/ProductData";
import Image from "next/image";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { LiaListUlSolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";

interface Product {
  id: number;
  image: string;
  Title: string;
  Price: string;
  DiscountedPrice: string;
  Product: string;
  summary: string;
}

const Page: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage dropdown open state
  const [selectedOption, setSelectedOption] = useState("Date, New to Old"); // Initially selected option
  const [layoutType, setLayoutType] = useState("grid"); // Manage layout type (grid or list)

  // Dropdown options
  const sortOptions = [
    "Features",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, Low to High",
    "Price, High to Low",
    "Date, New to Old",
    "Date, Old to New",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown visibility

  const handleOptionClick = (option: string) => {
    setSelectedOption(option); // Update the selected option
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleLayout = (layout: string) => {
    setLayoutType(layout); // Change layout type
  };

  return (
    <>
      <main>
        {/* Top News section */}
        <section>
          <div className="bg-[url('/Image/AllProductBg.webp')] bg-cover bg-center h-auto">
            <h1 className="text-center text-white text-7xl tracking-widest py-5 ">
              ALL PRODUCTS
            </h1>

            <div className="flex items-center justify-center pb-4 gap-5 text-white">
              <Link href={"/"}>Home</Link> <FaCaretRight />
              <Link className="text-primaryColor" href={"/"}>
                ALL PRODUCTS
              </Link>
            </div>
          </div>
        </section>

        {/* All Product Section*/}
        <section>
          <div className="flex items-center justify-between flex-wrap m-auto md:p-10 p-4 w-full">
            <div className="flex items-center gap-4 py-6 text-xl w-auto">
              <div className="flex gap-5 items-center ">
                <TfiLayoutGrid3
                  size={20}
                  className={`cursor-pointer  ${
                    layoutType === "grid" ? "text-primaryColor" : ""
                  }`}
                  onClick={() => toggleLayout("grid")}
                />{" "}
                {/* Grid */}
                <LiaListUlSolid
                  size={25}
                  className={`cursor-pointer ${
                    layoutType === "list" ? "text-primaryColor" : ""
                  }`}
                  onClick={() => toggleLayout("list")}
                />{" "}
                {/* List */}
              </div>
              <p className="px-5  md:text-xl sm:text-2xl w-full">
                showing 1 - 10 of 13 products
              </p>
            </div>
            <div>
              <div className="relative">
                {/* Dropdown button */}
                <button
                  onClick={toggleDropdown}
                  className="bg-transparent text-black py-2 px-4  border border-gray-300 rounded-md flex items-center space-x-2 w-full"
                >
                  <span>
                    Sort by:{" "}
                    <span className="text-primaryColor">{selectedOption}</span>{" "}
                  </span>
                  <svg
                    className={`w-4 h-4 transform transition-all duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-300 z-10">
                    <ul className="divide-y divide-gray-200">
                      {sortOptions.map((option, index) => (
                        <li key={index}>
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                            onClick={() => handleOptionClick(option)} // Set the selected option and close dropdown
                          >
                            Sort: {option}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Display Section */}
          <div>
            <div
              className={`${
                layoutType === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  : "space-y-6 "
              }`}
            >
              {ProductsData.map((product: Product) => (
                <div
                  key={product.id}
                  className={` flex ${
                    layoutType === "grid"
                      ? "relative flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105 "
                      : "flex-col md:flex-row items-center  p-6 border-2 border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-black/5 hover:shadow-lg hover:scale-105 group" // Add `group` class here for list
                  } bg-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:text-primaryColor group${
                    layoutType === "list" ? "hover:scale-100" : ""
                  }`}
                >
                  {/* Product Image (% width for list) */}
                  <Link
                    href={`/product/${product.id}`}
                    className={`${
                      layoutType === "list"
                        ? "w-full md:w-1/3 lg:w-1/4 "
                        : "w-3/4 md:w-full"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.Title}
                      width={160}
                      height={60}
                      layout="intrinsic"
                      className="w-full h-20 md:h-16 object-cover rounded-md"
                    />
                  </Link>

                  {/* Product Details */}
                  <div
                    className={`${
                      layoutType === "list"
                        ? "relative w-2/3 pl-6 flex flex-col text-left justify-center"
                        : "w-full text-center md:text-left "
                    }`}
                  >
                    <h3
                      className={`${
                        layoutType === "list"
                          ? "text-4xl mt-2 md:mt-3 font-semibold"
                          : "mt-2 md:mt-3 text-xl font-semibold"
                      }`}
                    >
                      {product.Title}
                    </h3>
                    <p className="text-gray-500 mt-1 md:mt-2 text-sm">
                      {product.Product}
                    </p>

                    {/* Pricing */}
                    <Link
                      href={`/product/${product.id}`}
                      className="flex flex-col mt-0 md:mt-2 text-center md:text-left "
                    >
                      <div
                        className={`${
                          layoutType === "list"
                            ? "flex  text-left justify-start my-4 "
                            : ""
                        }`}
                      >
                        <span className="text-lg font-medium text-gray-600 line-through mr-2">
                          {product.Price || "-"}
                        </span>
                        {product.DiscountedPrice ? (
                          <span
                            className={`${
                              layoutType === "list"
                                ? "pl-0 md:pl-5 text-2xl md:text-4xl  text-primaryColor"
                                : "text-2xl font-bold text-primaryColor"
                            }`}
                          >
                            {product.DiscountedPrice}
                          </span>
                        ) : (
                          <span className="text-lg font-medium text-gray-600">
                            - Loading -
                          </span>
                        )}
                      </div>
                      {product.summary ? (
                        <span
                          className={`${
                            layoutType === "list"
                              ? "text-left text-sm md:text-lg font-medium text-gray-500 pb-0 md:pb-9 w-full"
                              : "hidden"
                          }`}
                        >
                          {product.summary}
                        </span>
                      ) : (
                        <span
                          className={`${
                            layoutType === "list"
                              ? " text-lg font-medium text-TextColor "
                              : "hidden"
                          }`}
                        >
                          product summary Loading
                        </span>
                      )}
                      <div
                        className={`${
                          layoutType === "list"
                            ? "flex items-center  mt-10 md:mt-20 "
                            : "hidden"
                        }`}
                      >
                        <span className="text-gray-900 font-bold pr-4 ">
                          SHARE THIS :
                        </span>{" "}
                        <span className="flex items-center gap-4">
                          <FaTwitterSquare
                            className="text-[#55acee]"
                            size={25}
                          />
                          <FaFacebook className="text-[#3b5998]" size={25} />
                          <IoLogoGoogleplus
                            className="text-[#e04c86]"
                            size={25}
                          />
                          <FaPinterest className="text-[#bd081c]" size={25} />
                        </span>
                      </div>
                    </Link>
                    {/* Hover Buttons Container */}
                    <div
                      className={`${
                        layoutType === "list"
                          ? "absolute inset-x-0 hidden md:flex  bottom-14 justify-center items-center gap-4 p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 bg-gray-100 shadow-lg rounded-full w-full"
                          : "absolute inset-x-0  flex  left-10 bottom-28 justify-center items-center gap-4 p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 bg-gray-100 shadow-lg rounded-full w-3/4"
                      }`}
                    >
                      <Link href={`/product/${product.id}`} className=" px-1 ">
                        <BsBag className="text-black" size={25} />
                      </Link>
                      <button className="border-x px-5  border-gray-500 ">
                        <CiHeart className="text-black" size={30} />
                      </button>
                      <button className="px-1 ">
                        <CiSearch className="text-black" size={30} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
