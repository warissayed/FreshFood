"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import individualBlogData from "@/api/individualBlogData";
import { useParams } from "next/navigation";
// Shad cn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// icon
import { FaCaretRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TfiPencilAlt } from "react-icons/tfi";
import { FaRegComment } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

// interface Blog {
//   id: number;
//   image: string;
//   Title: string;
//   summary: string;
//   summary2: string;
//   list1: string;
//   list2: string;
//   list3: string;
//   list4: string;
//   list5: string;
//   conclusion: string;
// }

const Page: React.FC = () => {
  const { id } = useParams();

  const blogPost = individualBlogData.find((post) => post.id.toString() === id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Blog post not found.</p>
      </div>
    );
  }
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
            <div className="grid grid-cols-1 gap-6">
              <div className="max-w-3xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900">
                    {blogPost.Title}
                  </h1>
                  <div className=" flex flex-wrap justify-center items-center gap-5 py-3">
                    <span
                      className="text-gray-500 text-sm
                    "
                    >
                      19. July .2017
                    </span>{" "}
                    <span className="flex text-sm items-center gap-2 text-gray-500">
                      <TfiPencilAlt /> FreshFood-Store Admin
                    </span>{" "}
                    <span className="flex text-sm items-center gap-2 text-gray-500">
                      <FaRegComment />2 Comments
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <Image
                    src={blogPost.image}
                    alt={blogPost.Title}
                    width={765}
                    height={489}
                    className="w-full h-72 object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Blog description */}
                <div className="shadow-xl  mt-24 py-5 px-2 md:px-5  text-center w-full">
                  <p className="text-gray-500 my-2 text-base italic py-5">
                    {blogPost.summary}
                  </p>
                  <div className="space-y-6 text-lg text-gray-800">
                    <p className="text-gray-500 my-2 text-base italic py-5">
                      {blogPost.summary2}
                    </p>

                    <ul className="list-square list-inside pl-5 text-[#565656] text-sm">
                      <li className="py-1">{blogPost.list1}</li>
                      <li className="py-1">{blogPost.list2}</li>
                      <li className="py-1">{blogPost.list3}</li>
                      <li className="py-1">{blogPost.list4}</li>
                      <li className="py-1s">{blogPost.list5}</li>
                    </ul>
                  </div>

                  <div className="p-6 my-2 shadow-lg">
                    <p className="text-gray-500 my-2 text-base italic py-5">
                      {blogPost.conclusion}
                    </p>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <Link
                    href={"/all-blogs"}
                    className="text-lg font-semibold text-primaryColor hover:text-green-700"
                  >
                    Back to all blogs
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3 border-y border-gray-200 py-5">
                <h3>SHARE THIS:</h3>{" "}
                <FaTwitterSquare size={25} className="text-[#55acee]" />
                <FaDribbble size={25} className="text-[#e04c86]" />
                <FaSkype size={25} className="text-[#00aff0]" />
                <FaPinterest size={25} className="text-[#bd081c]" />
                <FaSquareFacebook size={25} className="text-[#3b5998]" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">RELATED BLOG</h1>
              </div>
              {/* carousal */}
              <div className="flex justify-center items-center">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-1">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="flex flex-col  justify-center items-center md:basis-1/2 lg:basis-1/3"
                      >
                        <Image
                          src={
                            index === 0
                              ? "/Image/BlogImage/BlogImg1.webp"
                              : index === 1
                              ? "/Image/BlogImage/BlogImg2.webp"
                              : index === 2
                              ? "/Image/BlogImage/BlogImg3.webp"
                              : index === 4
                              ? "/Image/BlogImage/BlogImg4.webp"
                              : index === 5
                              ? "/Image/BlogImage/BlogImg1.webp"
                              : index === 6
                              ? "/Image/BlogImage/BlogImg2.webp"
                              : index === 7
                              ? "/Image/BlogImage/BlogImg3.webp"
                              : index === 8
                              ? "/Image/BlogImage/BlogImg4.webp"
                              : "/Image/BlogImage/BlogImg3.webp"
                          }
                          alt="Blog Posters"
                          height={160}
                          width={200}
                          className="w-auto h-auto"
                        />
                        <h3 className="text-center">
                          {index === 0
                            ? "This Is Organic Farming?"
                            : index === 1
                            ? "Learn On Organic Farms"
                            : index === 2
                            ? "Delicious Summer Foods"
                            : index === 3
                            ? "Advantage Of Organic Meat"
                            : index === 4
                            ? "This Is Organic Farming?"
                            : index === 5
                            ? "Learn On Organic Farms"
                            : index === 6
                            ? "Delicious Summer Foods"
                            : index === 7
                            ? "Advantage Of Organic Meat"
                            : index === 8
                            ? "This Is Organic Farming?"
                            : "Advantage Of Organic Meat"}
                        </h3>

                        <div className="flex flex-wrap gap-4 ">
                          <span className="flex justify-center items-center text-sm text-gray-500 gap-1">
                            <TfiPencilAlt /> FreshFood-Store Admin
                          </span>
                          <span className="flex justify-center items-center text-sm text-gray-500 gap-1">
                            <FaRegComment /> 0 comments
                          </span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
                  <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
                </Carousel>
              </div>
              {/* Comments */}
              <div>
                <h1 className="text-xl font-semibold">Comments</h1>
              </div>
              <section>
                <div className="flex justify-start items-center gap-5  py-5">
                  <Image
                    src={"/Image/AboutUs/our_team_image1.avif"}
                    alt="Comment Image"
                    height={60}
                    width={60}
                  />{" "}
                  <div className="border-b border-gray-200 pb-5">
                    <div className="flex justify-start items-center gap-5">
                      <h3>JONH</h3>
                      <li className="list-square list-inside text-sm text-gray-400">
                        July 25,2017
                      </li>
                    </div>
                    <h4 className="text-sm text-gray-400">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque.
                    </h4>
                  </div>
                </div>

                <div className="flex justify-start items-center gap-5 py-5">
                  <Image
                    src={"/Image/AboutUs/our_team_image2.avif"}
                    alt="Comment Image"
                    height={60}
                    width={60}
                  />{" "}
                  <div className="border-b border-gray-200 pb-5">
                    <div className="flex justify-start items-center gap-5">
                      <h3>JONH</h3>
                      <li className=" list-square list-inside text-sm text-gray-400">
                        July 25,2017
                      </li>
                    </div>
                    <h4 className="text-sm text-gray-400">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque.
                    </h4>
                  </div>
                </div>
              </section>
              {/* Leave a replay Comment section */}
              <div>
                <h1 className="text-xl font-semibold">Leave A Replay</h1>
              </div>
              <section>
                <div className="max-w-lg mx-5 md:mx-auto lg:mx-5 p-6 bg-white rounded-lg ">
                  <form onSubmit={handleSubmit}>
                    {/* Name and Email fields in the same line */}
                    <div className="flex  gap-4 mb-4">
                      <div className="w-full">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    {/* Website input */}
                    <div className="mb-4">
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        placeholder="Your Website"
                      />
                    </div>

                    {/* Comment textarea */}
                    <div className="mb-6">
                      <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Comment
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        placeholder="Write your comment..."
                        rows={4}
                        required
                      />
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-start">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-primaryColor text-white  hover:text-black font-semibold rounded-md hover:bg-transparent hover:border hover:border-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
          {/* Sidebar width on large screens) */}
          <div className="block">
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
