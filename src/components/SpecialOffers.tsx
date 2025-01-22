import Image from "next/image";
import React from "react";

const SpecialOffers = () => {
  return (
    <div>
      <main className="bg-[url('/Image/SpecialOffers.webp')] bg-cover bg-center w-full h-auto">
        <div className="flex items-center justify-center py-8 px-4">
          <div className="flex flex-col md:flex-row max-w-7xl w-full items-center justify-between rounded-lg bg-transparent p-6 md:p-12">
            {/* Image on the left */}
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
              <Image
                src="/Image/veggies.webp"
                alt="Landing Image"
                className="w-full h-auto object-cover rounded-lg"
                width={1600}
                height={800}
              />
            </div>

            {/* Text on the right */}
            <div className="flex flex-col text-center items-center justify-center pl-0 md:pl-8">
              <p className="text-4xl text-[#2B2B2B] mb-4 font-thin">
                Special Offers
              </p>

              <h1 className="text-5xl md:text-6xl text-primaryColor mb-4 font-bold">
                GET 30% OFF
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                YOUR ORDER OF $100 OR MORE
              </p>
              <div className="w-32 border-t border-gray-300 mb-6"></div>
              <p className="text-xl font-bold mb-4">Expand</p>
              <button className="bg-transparent text-primaryColor px-7 py-2 text-lg font-semibold hover:bg-primaryColor hover:text-white transition duration-300 border border-primaryColor">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpecialOffers;
