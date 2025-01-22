"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaCaretRight } from "react-icons/fa";

const page = () => {
  return (
    <main>
      {/* hero cover section */}
      <section>
        <div className="bg-[url('/Image/AllProductBg.webp')] bg-cover bg-center h-auto">
          <h1 className="text-center text-white text-7xl tracking-widest py-5 ">
            ABOUT US
          </h1>

          <div className="flex items-center justify-center pb-4 gap-5 text-white">
            <Link href={"/"}>Home</Link> <FaCaretRight />
            <Link className="text-primaryColor" href={"/"}>
              ABOUT US
            </Link>
          </div>
        </div>
      </section>

      {/* head line section  */}
      <section>
        <div className="text-center m-4">
          <h3 className="text-primaryColor text-3xl m-6">
            Welcome To Fresh Food
          </h3>
          <h1 className="text-5xl tracking-widest text-TextColor font-bold">
            A LITTLE STORY ABOUT US
          </h1>
        </div>
        <div className="flex flex-nowrap items-center justify-center space-x-4 py-8 sm:w-[90%] md:w-[1025px] lg:w-[1200px] m-auto">
          <div className="flex-1 border-t-2 border-gray-300"></div>

          <Image src={"/Image/leaf.png"} alt="Leaf" width={50} height={50} />

          <div className="flex-1 border-t-2 border-gray-300"></div>
        </div>
      </section>
      {/* About_us section */}
      <section className="flex  justify-center items-center w-[90vw] m-auto py-10 px-4 shadow">
        <div className="flex flex-wrap justify-between items-center max-w-7xl w-full">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <Image
              src={"/Image/AboutUs/Aboutuskid.webp"}
              alt="kid image"
              width={570}
              height={400}
              className=" h-auto w-full block" // Adjusts image size based on screen width
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4 text-black">
            <h1 className="font-medium text-3xl mb-4">
              A FRIENDLY ONLINE STORY
            </h1>

            <div className="border-t border-primaryColor mb-4 pt-4">
              <p className="text-sm md:text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula
                euismod, nec rhoncus sem et risus.
              </p>

              <p className="text-sm md:text-lg mt-4">
                Curabitur pulvinar dui viverra libero. Luctus in dictum velit
                luctus. Donec imperdiet tincidunt interdum. Duis ultricies
                condimentum interdum. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae.
              </p>
            </div>

            {/* Carousel */}
            <div className="flex justify-center items-center">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-md"
              >
                <CarouselContent className="-ml-1">
                  <CarouselItem className="flex justify-center items-center md:basis-1/2 lg:basis-1/3">
                    <Image
                      src={"/Image/AboutUs/slider1.webp"}
                      alt="Brand Image"
                      height={160}
                      width={200}
                      className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
                    />
                  </CarouselItem>
                  <CarouselItem className="flex justify-center items-center md:basis-1/2 lg:basis-1/3">
                    <Image
                      src={"/Image/AboutUs/slider2.webp"}
                      alt="Brand Image"
                      height={160}
                      width={200}
                      className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
                    />
                  </CarouselItem>
                  <CarouselItem className="flex justify-center items-center md:basis-1/2 lg:basis-1/3">
                    <Image
                      src={"/Image/AboutUs/slider3.webp"}
                      alt="Brand Image"
                      height={160}
                      width={200}
                      className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
                    />
                  </CarouselItem>
                  <CarouselItem className="flex justify-center items-center md:basis-1/2 lg:basis-1/3">
                    <Image
                      src={"/Image/AboutUs/slider1.webp"}
                      alt="Brand Image"
                      height={160}
                      width={200}
                      className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
                    />
                  </CarouselItem>
                  <CarouselItem className="flex justify-center items-center md:basis-1/2 lg:basis-1/3">
                    <Image
                      src={"/Image/AboutUs/slider2.webp"}
                      alt="Brand Image"
                      height={160}
                      width={200}
                      className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
                    />
                  </CarouselItem>
                  <CarouselItem className="flex justify-center items-center md:basis-1/2 lg:basis-1/3">
                    <Image
                      src={"/Image/AboutUs/slider3.webp"}
                      alt="Brand Image"
                      height={160}
                      width={200}
                      className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-gray-100 py-8 w-full ">
        <div className="text-center sm:w-[90%] md:w-[1025px] lg:w-[1200px] m-auto ">
          <h1 className="text-5xl tracking-widest text-TextColor font-bold">
            Why Choose Us
          </h1>
        </div>
        <div className="flex flex-nowrap items-center justify-center space-x-4 py-8 sm:w-[90%] md:w-[1025px] lg:w-[1200px] m-auto">
          <div className="flex-1 border-t-2 border-gray-300"></div>

          <Image src={"/Image/leaf.png"} alt="Leaf" width={50} height={50} />

          <div className="flex-1 border-t-2 border-gray-300"></div>
        </div>
      </section>
      <section className="flex items-center justify-center bg-gray-100">
        <div className="flex flex-wrap md:flex-col w-full sm:w-[90%] md:w-[1025px] lg:w-[1200px] mb-16 mt-6">
          {/* chose us main section */}
          <div className="flex  flex-wrap md:flex-nowrap w-full h-auto justify-center items-center ">
            {/* section 1 */}
            <div>
              {/* 1 */}
              <div className="flex items-center flex-row-reverse md:flex-row gap-4 mt-2 mb-20 ">
                <div className=" text-left md:text-right ">
                  <h3 className="text-xl text-TextColor font-semibold">
                    Always Fresh
                  </h3>{" "}
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <Image
                  src={"/Image/AboutUs/ChooseUs/icon.webp"}
                  alt="Choose us icon"
                  height={63}
                  width={63}
                  className="ml-4 inline-block align-middle "
                />
              </div>

              {/* 2 */}
              <div className="flex items-center flex-row-reverse md:flex-row gap-4 mt-2 mb-20">
                <div className="text-left md:text-right">
                  <h3 className="text-xl text-TextColor font-semibold">
                    Keep You Healthy
                  </h3>{" "}
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <Image
                  src={"/Image/AboutUs/ChooseUs/icon1.webp"}
                  alt="Choose us icon"
                  height={63}
                  width={63}
                  className=" ml-4 inline-block align-middle"
                />
              </div>
              {/* 3 */}
              <div className="flex items-center flex-row-reverse md:flex-row gap-4 mt-2 mb-20 ">
                <div className=" text-left md:text-right ">
                  <h3 className="text-xl text-TextColor font-semibold">
                    Keep You Healthy
                  </h3>{" "}
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <Image
                  src={"/Image/AboutUs/ChooseUs/icon2.webp"}
                  alt="Choose us icon"
                  height={63}
                  width={63}
                  className=" ml-4 inline-block  align-middle"
                />
              </div>
            </div>
            {/* middle image */}
            <div className="w-auto h-auto">
              <Image
                src={"/Image/AboutUs/ChooseUs/choose_us_image.webp"}
                alt="Choose us image"
                height={510}
                width={360}
                className="w-full h-auto"
              />
            </div>
            {/* section two */}
            <div>
              <div className="flex items-center gap-4 mt-2 mb-20">
                <Image
                  src={"/Image/AboutUs/ChooseUs/icon3.webp"}
                  alt="Choose us icon"
                  height={63}
                  width={63}
                  className="ml-4 md:mr-4 inline-block  align-middle"
                />

                <div className="text-left">
                  <h3 className="text-xl text-TextColor font-semibold">
                    Always Fresh
                  </h3>{" "}
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 mb-20">
                <Image
                  src={"/Image/AboutUs/ChooseUs/icon4.avif"}
                  alt="Choose us icon"
                  height={63}
                  width={63}
                  className=" ml-4 md:mr-4 inline-block  align-middle"
                />

                <div className="text-left">
                  <h3 className="text-xl text-TextColor font-semibold">
                    Keep You Healthy
                  </h3>{" "}
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 mb-20">
                <Image
                  src={"/Image/AboutUs/ChooseUs/icon5.webp"}
                  alt="Choose us icon"
                  height={63}
                  width={63}
                  className=" ml-4 md:mr-4 inline-block  align-middle"
                />

                <div className="text-left">
                  <h3 className="text-xl text-TextColor font-semibold">
                    Keep You Healthy
                  </h3>
                  <p
                    className="text-sm
                "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRESH FOOD’S FARMERS */}
      <section>
        <div className="text-center m-4">
          <h3 className="text-primaryColor text-3xl m-6">We Are Family</h3>
          <h1 className="text-5xl tracking-widest text-TextColor font-bold">
            FRESH FOOD&apos;S FARMERS
          </h1>
        </div>
        <div className="flex flex-nowrap items-center justify-center space-x-4 py-8 sm:w-[90%] md:w-[1025px] lg:w-[1200px] m-auto">
          <div className="flex-1 border-t-2 border-gray-300 max-w-full"></div>
          <Image
            src="/Image/leaf.png"
            alt="Leaf"
            width={50}
            height={50}
            className="max-w-full"
          />
          <div className="flex-1 border-t-2 border-gray-300 max-w-full"></div>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="flex flex-wrap md:flex-col w-full sm:w-[90%] md:w-[1025px] lg:w-[1200px] mb-16 mt-6">
          {/* Our team section */}
          <div className="flex flex-wrap justify-center items-center w-full gap-10 md:gap-8 my-8">
            {/* Team one */}
            <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[320px] lg:w-[350px]">
              <div>
                <Image
                  src={"/Image/AboutUs/our_team_image1.avif"}
                  alt="Our Team"
                  height={305}
                  width={305}
                />
              </div>
              <div className="text-center mt-6">
                <h1 className="text-TextColor text-2xl font-bold pb-3">
                  MICHAEL ANDREWS
                </h1>
                <p className="text-TextColor text-sm">
                  Richard McClintock, a Latin professor at words, consectetur,
                  from a Lorem Ipsum passage, and literature, discovered the
                </p>
                <span className="flex gap-5 justify-center items-center pt-4">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaSkype />
                  <FaGooglePlusG />
                </span>
              </div>
            </div>
            {/* Team two */}
            <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[320px] lg:w-[350px]">
              <div>
                <Image
                  src={"/Image/AboutUs/our_team_image2.avif"}
                  alt="Our Team"
                  height={305}
                  width={305}
                />
              </div>
              <div className="text-center mt-6">
                <h1 className="text-TextColor text-2xl font-bold pb-3">
                  MICHAEL ANDREWS
                </h1>
                <p className="text-TextColor text-sm">
                  Richard McClintock, a Latin professor at words, consectetur,
                  from a Lorem Ipsum passage, and literature, discovered the
                </p>
                <span className="flex gap-5 justify-center items-center pt-4">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaSkype />
                  <FaGooglePlusG />
                </span>
              </div>
            </div>
            {/* Team three */}
            <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[320px] lg:w-[350px]">
              <div>
                <Image
                  src={"/Image/AboutUs/our_team_image3.avif"}
                  alt="Our Team"
                  height={305}
                  width={305}
                />
              </div>
              <div className="text-center mt-6">
                <h1 className="text-TextColor text-2xl font-bold pb-3">
                  MICHAEL ANDREWS
                </h1>
                <p className="text-TextColor text-sm ">
                  Richard McClintock, a Latin professor at words, consectetur,
                  from a Lorem Ipsum passage, and literature, discovered the
                </p>
                <span className="flex gap-5 justify-center items-center pt-4">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaSkype />
                  <FaGooglePlusG />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
