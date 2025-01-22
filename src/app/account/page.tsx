import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";

const page: React.FC = () => {
  return (
    <div>
      <section>
        <div className="bg-[url('/Image/Headerimg.webp')] bg-cover bg-center h-auto">
          <h1 className="text-center text-white text-4xl md:text-6xl lg:text-7xl tracking-widest py-5">
            YOUR SHOPPING CART
          </h1>

          <div className="flex items-center justify-center text-sm md:text-base pb-4 gap-5 text-white">
            <Link href={"/"}>Home</Link> <FaCaretRight />
            <Link className="text-primaryColor" href={"/Login"}>
              Account
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-[60vh] flex flex-col md:flex-row justify-between items-center m-auto px-5 py-10">
          <div className="flex flex-col justify-center w-full md:w-1/2 h-full m-auto py-5">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="Heading_border text-2xl my-5">My Account</h1>
              <Link href={"/"} className="text-primaryColor">
                Logout
              </Link>
            </div>
            <div className="">
              <h1 className="Heading_border text-2xl my-5">Order History</h1>
              <p className="text-gray-500">you haven&apos;t placed any order</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <h1 className="border-b-2 border-primaryColor font-semibold pb-1 ml-6">
              Account Details
            </h1>

            <p className="mt-6 my-2 ml-6 text-xl font-semibold">XYZ User</p>
            <p className="ml-6 text-gray-700">USA</p>

            <div className="my-4 mx-14">
              <Link
                href={"/Addresses"}
                className="py-2 px-2 bg-primaryColor text-white text-lg font-semibold w-auto"
              >
                View Address(1)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
