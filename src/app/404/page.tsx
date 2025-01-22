import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10 my-20 px-4 md:px-8">
      {/* Image Section */}
      <Image
        src={"/Image/main-404.avif"}
        alt="404-Image"
        height={210}
        width={210}
        className="pb-10"
      />

      <div className="text-center">
        {/* Main Heading */}
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-6">
          THIS IS NOT THE WEB PAGE YOU ARE LOOKING FOR
        </h1>

        {/* Sub Heading and Link */}
        <div className="flex items-center justify-center text-center font-light text-lg md:text-xl space-x-2 md:space-x-4">
          <span>Please try one of the following pages</span>
          <Link href={"/"} className="flex items-center text-primaryColor">
            home page <FaAngleDoubleRight size={20} className="pt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
