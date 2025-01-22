import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";

const page = () => {
  return (
    <>
      <main className="w-full h-screen">
        {/* hero cover section */}
        <section>
          <div className="bg-[url('/Image/AllProductBg.webp')] bg-cover bg-center h-auto">
            <h1 className="text-center text-white text-7xl tracking-widest py-5 ">
              WISH LIST
            </h1>

            <div className="flex items-center justify-center pb-4 gap-5 text-white">
              <Link href={"/"}>Home</Link> <FaCaretRight />
              <Link className="text-primaryColor" href={"/"}>
                WISH LIST
              </Link>
            </div>
          </div>
        </section>
        {/* wish list section */}
        <section>
          <div className="bg-primaryColor w-auto  p-4 mt-4  md:m-6 h-14  md:p-4 flex justify-between items-center">
            <h3 className="text-white text-lg md:text-xl font-bold">
              Wishlist
            </h3>
            <ul className="flex justify-between font-bold items-center gap-5 md:gap-10  text-white">
              <li className="md:text-xl text-lg">Product</li>
              <li className="md:text-xl text-base hidden md:block">Product</li>
              <li className="md:text-xl text-base hidden md:block">Price</li>
              <li className="md:text-xl text-lg ">Availability</li>
            </ul>
            <h3 className="text-white text-lg md:text-xl font-bold">
              Add to cart
            </h3>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
