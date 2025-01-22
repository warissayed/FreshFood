import Image from "next/image";
import React from "react";

const Details: React.FC = () => {
  return (
    <main>
      <div className="flex justify-center items-center gap-5 m-6  relative flex-wrap h-auto w-auto ">
        <Image
          src={"/Image/3_grande.avif"}
          alt="veggies image"
          height={400}
          width={400}
          className="shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full sm:w-1/3 md:w-1/4 lg:w-1/4"
        />
        <Image
          src={"/Image/4_grande.avif"}
          alt="veggies image"
          height={400}
          width={400}
          className="shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full sm:w-1/3 md:w-1/4 lg:w-1/4"
        />
        <Image
          src={"/Image/5_grande.avif"}
          alt="veggies image"
          height={400}
          width={400}
          className="shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full sm:w-1/3 md:w-1/4 lg:w-1/4"
        />
      </div>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 bg-gray-50 ">
        {/* Right Side - Image */}
        <div className=" flex justify-center md:justify-start w-full">
          <Image
            src={"/Image/Man.png"}
            alt="Company Vision"
            className="max-w-auto lg:h-full md:h-auto sm:h-auto rounded-lg"
            width={400}
            height={400}
          />
        </div>

        {/* Left Side - Company Introduction */}
        <div className="w-auto lg:w-auto md:w-2/3 sm:w-auto text-center ">
          <h1 className="text-4xl md:text-5xl text-gray-800">
            We are{" "}
            <span className="font-bold text-primaryColor">FRESH FOOD</span>
          </h1>
          <p className="mt-4 text-[#2B2B2B] text-lg">
            The fact of the matter is that you really know something&apos;s
            organic when you find bugs! they obviously wouldn&apos;t have made
            it that far in a non-organic growing environment, so better than any
            certification or seal on a package, the presence of creatures let
            you know the plant was healthy and
          </p>
          <button className="mt-6 px-6 py-3 border text-black bg-primaryColor hover:bg-transparent hover:border hover:border-primaryColor  rounded-lg shadow">
            Learn More
          </button>

          {/* Leaf  */}
          <div className="flex items-center justify-center space-x-4 my-8">
            <div className="flex-1 border-t-2 border-gray-300"></div>

            <Image src={"/Image/leaf.png"} alt="Leaf" width={50} height={50} />

            <div className="flex-1 border-t-2 border-gray-300"></div>
          </div>
          {/* Details Info */}
          <div className="flex items-center justify-center h-full w-full gap-6 ">
            <div className="flex flex-col justify-center items-center h-36 w-full bg-gray-100 shadow-lg">
              <Image
                src={"/Image/free_shipping.png"}
                alt="Free Shipping"
                width={70}
                height={70}
                className="p-2"
              />
              <p className="font-bold p-1">FREE SHIPPING</p>
              <p className="text-xs text-[#2B2B2B]">ON ORDER OVER $500</p>
            </div>
            <div className="flex flex-col justify-center items-center h-36 w-full bg-gray-100 shadow-lg">
              <Image
                src={"/Image/Support.png"}
                alt="Support"
                width={70}
                height={70}
                className="p-2"
              />
              <p className="font-bold p-1">SUPPORT</p>
              <p className="text-xs text-[#2B2B2B]">LIFE TIME SUPPORT 24/7</p>
            </div>
            <div className=" flex flex-col justify-center items-center h-36 w-full bg-gray-100 shadow-lg">
              <Image
                src={"/Image/Help_Partner.png"}
                alt="Help Partner"
                width={70}
                height={70}
                className="p-2"
              />
              <p className="font-bold p-1">HELP PARTNER</p>
              <p className="text-xs text-[#2B2B2B]">HELP ALL ASPECTS</p>
            </div>
            <div className="flex flex-col justify-center items-center h-36 w-full bg-gray-100 shadow-lg">
              <Image
                src={"/Image/contact.png"}
                alt="Contact-us"
                width={70}
                height={70}
                className="p-2"
              />
              <p className="font-bold p-1">CONTACT WITH US</p>
              <p className="text-xs text-[#2B2B2B]">+07 (0) 7782 9137</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
