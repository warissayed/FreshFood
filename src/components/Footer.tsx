"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [isPriceMenuOpen, setPriceMenuOpen] = useState(false);
  return (
    <footer className="bg-gray-200 text-primaryColor py-12 px-4 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="text-sm text-TextColor ">
            We are a passionate company dedicated to providing high-quality
            products and services to our customers. Our mission is to ensure
            customer satisfaction by offering exceptional value, reliability,
            and service.
            <Link className="block text-primaryColor mt-4" href={"/About"}>
              Read more →{" "}
            </Link>
          </p>
        </div>

        {/* Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Information</h3>
          <ul className="text-sm space-y-2 text-TextColor">
            <li>
              <a href="/delivery" className="hover:text-gray-400">
                Delivery
              </a>
            </li>
            <li>
              <a href="/legal-notice" className="hover:text-gray-400">
                Legal Notice
              </a>
            </li>
            <li>
              <a href="/terms-conditions" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/secure-payment" className="hover:text-gray-400">
                Secure Payment
              </a>
            </li>
            <li>
              <a href="/our-stores" className="hover:text-gray-400">
                Our Stores
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-xl hover:text-gray-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="text-xl hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-xl hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-xl hover:text-gray-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="mt-4">
            <h4 className="text-md font-semibold">Payment Methods</h4>
            <Image
              src="/Image/Payment.webp"
              alt="Payment Methods"
              className="mt-2"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Get Newsletter Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Get Newsletter</h3>
          <div className="flex flex-col justify-center ">
            <p className="text-TextColor">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-primaryColor w-full"
            />
            <button className="bg-primaryColor text-white hover:bg-transparent hover:text-black hover:border border-black px-4 py-2 w-[60%] focus:outline-none my-3">
              Subscribe &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      {/* <hr className="border-t-2 border-gray-300" />
      <div className="flex justify-between text-center text-sm text-gray-400 mt-2">
        <p>&copy; 2025 Company Name. All rights reserved.</p>
        
      </div> */}
      <div className="container mx-auto flex flex-wrap justify-between items-center text-sm text-gray-400">
        {/* Left section - Copyright */}
        <p>&copy; 2025 Company Name. All rights reserved.</p>

        {/* Right section - Additional Links and Hover Menus */}
        <div className="flex space-x-6">
          {/* Contact Us, Terms of Use, Privacy Policy, etc. */}
          <div className="flex space-x-4">
            <a href="/contact-us" className="hover:text-gray-300">
              Contact Us
            </a>
            <a href="/terms-of-use" className="hover:text-gray-300">
              Terms of Use
            </a>
            <a href="/privacy-policy" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="/site-map" className="hover:text-gray-300">
              Site Map
            </a>
          </div>

          {/* Language Section with Hover */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setLanguageMenuOpen(true)}
            onMouseLeave={() => setLanguageMenuOpen(false)}
          >
            <span className="hover:text-gray-300">Language: ENG</span>
            {isLanguageMenuOpen && (
              <div className="absolute bottom-6 right-0 bg-gray-400 text-white rounded shadow-lg mt-1">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-primaryColor"
                >
                  ENG
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-primaryColor"
                >
                  ESP
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-primaryColor"
                >
                  FRA
                </a>
              </div>
            )}
          </div>

          {/* Price Section with Hover */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setPriceMenuOpen(true)}
            onMouseLeave={() => setPriceMenuOpen(false)}
          >
            <span className="hover:text-gray-300">Price: USD</span>
            {isPriceMenuOpen && (
              <div className="absolute bottom-6 right-0 bg-gray-400 text-white  rounded shadow-lg mt-1">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-primaryColor"
                >
                  USD
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-primaryColor"
                >
                  EUR
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-primaryColor"
                >
                  GBP
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
