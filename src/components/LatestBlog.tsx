"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogData from "@/api/BlogData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Blog {
  id: number;
  image: string;
  Title: string;
  summary: string;
  Description: string;
}

const LatestBlog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setBlogs(BlogData);
  }, []);

  return (
    <>
      <section className="mb-9">
        <div className="flex flex-col justify-center items-center text-4xl font-bold mb-6">
          <Image
            src={"/Image/GreenBar.png"}
            alt="Green bar"
            height={11}
            width={60}
            className="mb-5 mt-4"
          />
          Latest Blogs
          <button className="bg-transparent cursor-pointer m-1">
            <Link
              href={"/all-blogs"}
              className="text-base font-thin cursor-pointer text-TextColor"
            >
              See all
            </Link>
          </button>
        </div>

        {/* Carousel Component */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {blogs.length === 0 ? (
              <div className="text-center text-white">Loading blogs...</div>
            ) : (
              blogs.map((blog) => (
                <CarouselItem
                  key={blog.id}
                  className="flex justify-center items-center sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  {/* Blog Content */}
                  <Link
                    href={`/Blog/${blog.id}`}
                    className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md"
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

                    <div className="text-center mt-4">
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
                      <button className="bg-transparent text-primaryColor px-7 py-2 text-lg font-semibold hover:bg-primaryColor hover:text-white transition duration-300 border border-primaryColor">
                        Read More
                      </button>
                    </div>
                  </Link>
                </CarouselItem>
              ))
            )}
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
        </Carousel>
      </section>
    </>
  );
};

export default LatestBlog;
