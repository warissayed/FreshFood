"use client";
import Link from "next/link";

import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
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
  return (
    <main>
      {/* Header */}
      <section>
        <div className="bg-[url('/Image/AllProductBg.webp')] bg-cover bg-center h-auto">
          <h1 className="text-center text-white text-7xl tracking-widest py-5 ">
            RESET YOUR PASSWORD
          </h1>

          <div className="flex items-center justify-center pb-4 gap-5 text-white">
            <Link href={"/"}>Home</Link> <FaCaretRight />
            <Link className="text-primaryColor" href={"/Login"}>
              RESET PASSWORD
            </Link>
          </div>
        </div>
      </section>
      {/* Login  */}

      <section>
        <div className="  w-full  md:w-[60vw]  flex flex-col justify-center items-center md:items-start  m-auto py-7 px-4 ">
          <h3 className="border-b border-primaryColor font-bold pb-2  ">
            RESET YOUR PASSWORD
          </h3>

          <p className="text-gray-500 text-sm py-3">
            We will send you an email to reset your password.
          </p>
          <div>
            <div className="w-full md:w-[50vw] mx-auto p-6 bg-white  ">
              <form onSubmit={handleSubmit}>
                {/* Name and Email fields in the same line */}
                <div className="mb-4 py-4">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium py-2"
                  >
                    EMAIL
                  </label>
                  <input
                    type="url"
                    id="Email"
                    name="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="dasdasda@gmaul.com"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-8 py-2 bg-primaryColor text-white  hover:text-gray-500 font-semibold border hover:bg-transparent hover:border hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="py-4">
                <Link
                  href={"/Register"}
                  className="text-primaryColor text-sm py-1 "
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
