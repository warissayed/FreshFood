"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosPerson } from "react-icons/io";
import { FaBars } from "react-icons/fa";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" sticky top-0 z-20">
      {/* contact detail and account */}
      <header className="bg-white text-black px-14 py-2  max-w-full m-auto md:block hidden">
        <div className="max-w-full  overflow-hidden hidden lg:block md:block sm:hidden bg-white ">
          <div className="flex justify-between items-center w-full ">
            <div className="flex items-center gap-1 text-[#2B2B2B]">
              <FiPhoneCall />
              <p className="font-serif  text-sm">
                Call us{" "}
                <span className="text-primaryColor font-bold">
                  070-7782-9137
                </span>
              </p>
            </div>
            <div className=" flex items-center gap-1 text-[#2B2B2B]">
              <HoverCard>
                <HoverCardTrigger className="flex items-center gap-1 cursor-pointer">
                  <IoIosPerson /> <span className="text-sm">My account</span>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto h-auto flex flex-col items-center">
                  <Link
                    href={"/Login"}
                    className="text-sm font-normal text-gray-600"
                  >
                    Login
                  </Link>
                  <Link
                    href={"/Register"}
                    className="text-sm font-normal text-gray-600"
                  >
                    Register
                  </Link>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <hr className="border-t-1 border-gray-300 m-auto max-w-full" />
        </div>
      </header>

      <div className="bg-white text-black px-4  py-2  flex justify-between items-center max-w-full m-auto ">
        <div className="flex md:hidden justify-center  gap-3 items-center text-black text-2xl py-2">
          <FaBars onClick={toggleMenu} />
        </div>

        {/* Logo */}
        <header className=" flex justify-between w-full px-9">
          <div className="flex-shrink-0 px-2">
            {/* <h1 className="font-bold lg:text-2xl md:text-2xl sm:text-4xl">
          Fresh Food
        </h1> */}
            <Image
              src="/Image/FreshFood.jpg"
              alt="Fresh Food"
              width={200}
              height={42.97}
              className="w-full h-auto"
              layout="responsive"
              // className=" w-full lg:w-[75%] md:w-[50%] sm:w-[25%]"
            />
          </div>

          {/* Navigation Links (Desktop) and (Laptops)*/}
          <div className="hidden md:flex flex-grow justify-center space-x-6 text-2xl font-bold gap-4">
            <Link
              href={"/"}
              className="hover:text-primaryColor text-[#2B2B2B] text-xl"
            >
              Home
            </Link>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  href={"/about-us"}
                  className="hover:text-primaryColor text-[#2B2B2B]  text-xl "
                >
                  Shop
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="h-auto w-[60vw]">
                <div>
                  <Image
                    src={"/Image/Nav_image.webp"}
                    alt="Nav_images"
                    height={1920}
                    width={1080}
                    className="h-2/3 w-full"
                  />
                  <div className="flex justify-evenly items-center w-full bg-gray-300">
                    <div className="flex justify-between items-center w-full p-6">
                      <div className="flex flex-col items-start w-full">
                        <h4 className="text-2xl">Fruit</h4>
                        <div className="flex flex-col justify-center text-start">
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Seating
                          </p>
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Tables
                          </p>
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Accessories
                          </p>
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Series
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <h4 className="text-2xl">Vegetables</h4>
                        <div className="flex flex-col justify-center items-start">
                          <p className="text-sm py-2 border-y  border-gray-300">
                            lighting
                          </p>
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Storage
                          </p>
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Accessories
                          </p>
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Beds
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <h4 className="text-2xl">Nuts</h4>
                        <div className="flex flex-col justify-center items-start">
                          <p className="text-sm py-2 border-y  border-gray-300 ">
                            Cleaning
                          </p>
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Tools
                          </p>
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Waste Bin Ports & Pans
                          </p>
                          <p className="text-sm py-2 border-y  border-gray-300">
                            Series
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <h4 className="text-2xl"> Organic</h4>
                        <div className="flex flex-col justify-center items-start ">
                          <p className="text-sm py-2 border-y  border-gray-300 ">
                            Seating
                          </p>
                          <p className="text-sm py-2 border border-gray-300">
                            Tables
                          </p>
                          <p className="text-sm py-2 border border-gray-300">
                            Accessories
                          </p>
                          <p className="text-sm py-2 border border-gray-300">
                            Series
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Link
              href={"/all-blogs"}
              className="hover:text-primaryColor text-[#2B2B2B]  text-xl "
            >
              Collections
            </Link>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  href={"/contact-us"}
                  className="hover:text-primaryColor text-[#2B2B2B]  text-xl"
                >
                  Page
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto">
                <div className="flex justify-center items-center ">
                  <ul className="list-square list-inside pl-5 text-[#565656] text-sm">
                    <li className="hover:text-primaryColor">
                      <Link href={"/404"}>404</Link>
                    </li>
                    <li className="hover:text-primaryColor">
                      <Link href={"/about-us"}>AboutUs</Link>
                    </li>
                    <li className="hover:text-primaryColor">
                      <Link href={"/contact-us"}>ContactUs</Link>
                    </li>
                    <li className="hover:text-primaryColor">
                      <Link href={"/wish-list"}>Wishlist</Link>
                    </li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* <Link
              href="#contact"
              className="hover:text-primaryColor text-[#2B2B2B]  text-xl "
            >
              ok
            </Link> */}
          </div>

          {/* #TODO add search and bag  */}
          <div>
            <div className=" flex justify-center  gap-3 items-center text-black text-2xl  py-2">
              <Dialog>
                <DialogTrigger>
                  {" "}
                  <CiSearch />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex w-full max-w-sm items-center space-x-2">
                      <Input
                        type="search"
                        className="px-4 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-gray-500 w-full "
                        placeholder="Search"
                      />
                      <CiSearch size={35} />
                    </DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Link href={"/Cart"}>
                <BsHandbag />
              </Link>
            </div>
          </div>
        </header>

        {/* Mobile Menu Icon */}
        {/* <div
          className="md:hidden flex items-center bg-red-500"
          onClick={toggleMenu}
        >
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div> */}

        {/* Mobile Menu (Hidden by default) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 right-0 bg-white text-black p-6">
            {/* Close Icon */}
            <div className="flex justify-start mb-4 ">
              <button
                className="text-2xl font-bold text-black"
                onClick={toggleMenu}
              >
                X
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="#home"
                className="hover:text-black text-lg font-bold"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-black text-lg font-bold"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="#services"
                className="hover:text-black text-lg font-bold"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="hover:text-black text-lg font-bold"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <span className="flex items-center justify-center bg-black hover:bg-primaryColor text-white px-6 py-2 rounded-lg mt-4 shadow-xl">
                <button className="text-xl">
                  <IoIosPerson />
                </button>{" "}
                My Account
              </span>
              <div className="flex items-center gap-1 text-[#2B2B2B]">
                <FiPhoneCall />
                <p className="font-serif  text-sm">
                  Call us{" "}
                  <span className="text-primaryColor font-bold">
                    070-7782-9137
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
