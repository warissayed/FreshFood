"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    LastName: "",
    FirstName: "",
    email: "",
    password: "",
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
            CREATE ACCOUNT
          </h1>

          <div className="flex items-center justify-center pb-4 gap-5 text-white">
            <Link href={"/"}>Home</Link> <FaCaretRight />
            <Link className="text-primaryColor" href={"/Login"}>
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </section>
      {/* Login  */}

      <section>
        <div className="  w-full  md:w-[60vw]  flex flex-col justify-center items-center md:items-start  m-auto py-7 px-4 ">
          <h3 className="border-b border-primaryColor font-bold pb-2  ">
            CREATE ACCOUNT
          </h3>

          <p className="text-gray-500 text-sm py-3">
            Create your own Rimbus account.
          </p>
          <div>
            <div className="w-full md:w-[50vw] mx-auto p-6 bg-white  ">
              <form onSubmit={handleSubmit}>
                {/* First Name*/}
                <div className="mb-4 py-2">
                  <label
                    htmlFor="Last Name"
                    className="block text-sm font-medium "
                  >
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="First Name"
                  />
                </div>
                {/* Last Name */}
                <div className="mb-4 py-2">
                  <label
                    htmlFor="Last Name"
                    className="block text-sm font-medium "
                  >
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="Last Name"
                  />
                </div>
                {/* Email  */}
                <div className="mb-4 py-2">
                  <label htmlFor="Email" className="block text-sm font-medium ">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="Email"
                  />
                </div>

                {/* Password */}
                <div className="mb-4 py-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium "
                  >
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="password"
                  />
                </div>
                <div className="py-4">
                  <Link
                    href={"/Forget-password"}
                    className="text-primaryColor text-sm "
                  >
                    Forgot your password?
                  </Link>
                </div>

                {/* Submit button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primaryColor text-white  hover:text-gray-500 font-semibold border hover:bg-transparent hover:border hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="py-4">
                <Link href={"/Login"} className="text-primaryColor text-sm ">
                  Login
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
