"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogData from "@/api/BlogData";
import { FaCaretRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

interface Blog {
  id: number;
  image: string;
  Title: string;
  summary: string;
  Description: string;
}

const Page: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setBlogs(BlogData);
  }, []);

  return (
    <main>
      <section>
        <div className="bg-[url('/Image/AllProductBg.webp')] bg-cover bg-center h-auto">
          <h1 className="text-center text-white text-7xl tracking-widest py-5 ">
            NEWS
          </h1>

          <div className="flex items-center justify-center pb-4 gap-5 text-white">
            <Link href={"/"}>Home</Link> <FaCaretRight />
            <Link className="text-primaryColor" href={"/"}>
              NEWS
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="py-10 px-4 sm:px-6 lg:px-8 flex flex-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Blog Content (70% width on large screens) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
              {blogs.length === 0 ? (
                <div className="col-span-full text-center text-white">
                  Loading blogs...
                </div>
              ) : (
                blogs.map((blog) => (
                  <Link
                    href={`Blog/${blog.id}`}
                    key={blog.id}
                    className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    {/* Blog Image */}
                    <Image
                      src={blog.image || "/Image/BlogImage/BlogImg1.webp"}
                      alt={blog.Title}
                      width={350}
                      height={250}
                      layout="intrinsic"
                      className="w-full h-auto object-cover rounded-md"
                    />

                    <div className="text-center mt-4 w-full">
                      {/* Blog Title */}
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">
                        {blog.Title}
                      </h2>

                      {/* Blog Summary */}
                      <p className="text-sm sm:text-base text-gray-600 mb-4">
                        {blog.summary}
                      </p>

                      {/* Blog Description */}
                      <p className="text-sm sm:text-base text-gray-800 mb-6">
                        {blog.Description}
                      </p>

                      {/* Read More Button */}
                      <div>
                        <button className="bg-transparent text-primaryColor px-7 py-2 text-lg font-semibold hover:bg-primaryColor hover:text-white transition duration-300 border border-primaryColor text-center block w-full">
                          Read More
                        </button>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Sidebar width on large screens) */}
          <div className="block`">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
              {/* search bar */}
              <div className="flex justify-center items-center w-full px-4 py-2 bg-gray-100 rounded-md max-w-xl mx-auto">
                <div className="flex items-center w-full">
                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primaryColor rounded-md"
                  />
                  {/* Search Icon */}
                  <CiSearch size={20} className="text-gray-500 mr-2" />
                </div>
              </div>
              {/* Category section */}
              <ul className="m-6 list-disc border-t border-gray-300 pt-5">
                <h3 className="text-left text-[#333333] font-semibold text-2xl border-b-2 border-primaryColor">
                  CATEGORY BLOG
                </h3>
                <li>
                  <Link href="/category1">
                    <span className="block text-lg text-black hover:text-primaryColor mb-2 mt-5">
                      HOME
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category2">
                    <span className="block text-lg text-black hover:text-primaryColor mb-2">
                      SHOP
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category3">
                    <span className="block text-lg text-black hover:text-primaryColor mb-2">
                      COLLECTION
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category1">
                    <span className="block text-lg text-black hover:text-primaryColor mb-2">
                      PAGE
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category2">
                    <span className="block text-lg text-black hover:text-primaryColor mb-2">
                      SHORTCODE
                    </span>
                  </Link>
                </li>
              </ul>
              {/* Recent post */}
              <ul className="m-6 list-disc border-t border-gray-300 pt-5">
                <h3 className="text-left text-[#333333] font-semibold text-2xl border-b-2 border-primaryColor">
                  RECENT POST
                </h3>
                <li>
                  <Link href="/category1">
                    <span className="block text-lg text-black hover:text-primaryColor mb-2 mt-5">
                      Learn On Organic Farms
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category2">
                    <span className="block text-lg text-black hover:text-primaryColor mb-2">
                      What is organic farming?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category3">
                    <span className="block text-lg text-black hover:text-primaryColor mb-2">
                      Advantages of Organic Meat
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category1">
                    <span className="block text-lg text-black hover:text-primaryColor mb-2">
                      Delicious Summer Foods
                    </span>
                  </Link>
                </li>
              </ul>
              {/* sale product */}
              <div className=" m-6 list-disc border-t border-gray-300 pt-5">
                <h1 className="text-left text-[#333333] font-semibold text-2xl border-b-2 border-primaryColor ">
                  Sales Product
                </h1>
                <div className="flex justify-between mt-5">
                  <Image
                    src={"/Image/ProductImage/Product1.webp"}
                    alt=""
                    height={100}
                    width={160}
                  />
                  <div className="flex flex-col text-lef p-4 h-full w-full">
                    <h3 className=" ">Black Greps</h3>
                    <div className="flex  ">
                      <span className="text-lg font-medium text-gray-600 line-through mr-2">
                        $400
                      </span>

                      <span className="text-xl font-bold text-primaryColor pl-4">
                        $300
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Image
                    src={"/Image/ProductImage/Product2.webp"}
                    alt=""
                    height={100}
                    width={160}
                  />
                  <div className="flex flex-col text-lef p-4 h-full w-full">
                    <h3 className=" ">Persimmon</h3>
                    <div className="flex  ">
                      <span className="text-lg font-medium text-gray-600 line-through mr-2">
                        $400
                      </span>

                      <span className="text-xl font-bold text-primaryColor pl-4">
                        $300
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Image
                    src={"/Image/ProductImage/Product3.webp"}
                    alt=""
                    height={100}
                    width={160}
                  />
                  <div className="flex flex-col text-lef p-4 h-full w-full">
                    <h3 className=" ">cling Peach</h3>
                    <div className="flex  ">
                      <span className="text-lg font-medium text-gray-600 line-through mr-2">
                        $400
                      </span>

                      <span className="text-xl font-bold text-primaryColor pl-4">
                        $300
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Image
                    src={"/Image/ProductImage/Product4.webp"}
                    alt=""
                    height={100}
                    width={160}
                  />
                  <div className="flex flex-col text-lef p-4 h-full w-full">
                    <h3 className=" ">Plums</h3>
                    <div className="flex  ">
                      <span className="text-lg font-medium text-gray-600 line-through mr-2">
                        $400
                      </span>

                      <span className="text-xl font-bold text-primaryColor pl-4">
                        $300
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tag Cloud */}
              <div className="m-6 list-disc border-t border-gray-300 pt-5">
                <h3 className="text-left text-[#333333] font-semibold text-2xl border-b-2 border-primaryColor mb-5">
                  RECENT POST
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="border border-gray-300 text-gray-800 px-6 py-2 hover:bg-primaryColor hover:text-white transition duration-300">
                    Armchair
                  </button>
                  <button className="border border-gray-300 text-gray-800 px-6 py-2 hover:bg-primaryColor hover:text-white transition duration-300">
                    Decor
                  </button>
                  <button className="border border-gray-300 text-gray-800 px-6 py-2 hover:bg-primaryColor hover:text-white transition duration-300">
                    Gift Lamp
                  </button>
                  <button className="border border-gray-300 text-gray-800 px-6 py-2 hover:bg-primaryColor hover:text-white transition duration-300">
                    Outdoor
                  </button>
                  <button className="border border-gray-300 text-gray-800 px-6 py-2 hover:bg-primaryColor hover:text-white transition duration-300">
                    Rugs
                  </button>
                  <button className="border border-gray-300 text-gray-800 px-6 py-2 hover:bg-primaryColor hover:text-white transition duration-300">
                    Sofa
                  </button>
                  <button className="border border-gray-300 text-gray-800 px-6 py-2 hover:bg-primaryColor hover:text-white transition duration-300">
                    Storage
                  </button>
                  <button className="border border-gray-300 text-gray-800 px-6 py-2 hover:bg-primaryColor hover:text-white transition duration-300">
                    Table
                  </button>
                </div>
              </div>
              {/* Banner Slider */}
              <div className="m-6 list-disc border-t border-gray-300 py-5 ">
                <h3 className="text-left text-[#333333] font-semibold text-2xl border-b-2 border-primaryColor mb-5">
                  RECENT POST
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3">
                <div className="relative overflow-hidden">
                  <Image
                    src={"/Image/SidebarImage/image1.webp"}
                    alt="sidebar image 1"
                    height={50}
                    width={100}
                    className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={"/Image/SidebarImage/image2.webp"}
                    alt="sidebar image 2"
                    height={50}
                    width={100}
                    className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={"/Image/SidebarImage/image3.webp"}
                    alt="sidebar image 3"
                    height={50}
                    width={100}
                    className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={"/Image/SidebarImage/image4.webp"}
                    alt="sidebar image 4"
                    height={50}
                    width={100}
                    className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={"/Image/SidebarImage/image5.webp"}
                    alt="sidebar image 5"
                    height={50}
                    width={100}
                    className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={"/Image/SidebarImage/image6.webp"}
                    alt="sidebar image 6"
                    height={50}
                    width={100}
                    className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={"/Image/SidebarImage/image7.webp"}
                    alt="sidebar image 7"
                    height={50}
                    width={100}
                    className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={"/Image/SidebarImage/image8.webp"}
                    alt="sidebar image 8"
                    height={50}
                    width={100}
                    className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={"/Image/SidebarImage/image9.webp"}
                    alt="sidebar image 9"
                    height={50}
                    width={100}
                    className="w-full h-full transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
