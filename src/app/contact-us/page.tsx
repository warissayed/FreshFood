"use client";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { IoIosGlobe } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const Page: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    website: "",
    comment: "",
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
    <div>
      {/* <section>
        <div className="bg-[url('/Image/AllProductBg.webp')] bg-cover bg-center h-auto">
          <h1 className="text-center text-white text-7xl tracking-widest py-5 ">
            CONTACT US
          </h1>

          <div className="flex items-center justify-center pb-4 gap-5 text-white">
            <Link href={"/"}>Home</Link> <FaCaretRight />
            <Link className="text-primaryColor" href={"/"}>
              CONTACT US
            </Link>
          </div>
        </div>
      </section> */}
      {/* map section */}
      <section>
        <div className="flex justify-between items-center ">
          <div className="w-full h-[60vh]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.152728721621!2d72.8136742147997!3d19.07609041183674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6f8046ff16d%3A0x6cc5a44fc0289a4a!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1704575829880!5m2!1sen!2sin"
              className="border-0 w-full h-full rounded-lg"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* location and contact details */}
      <section>
        <div className="  flex flex-wrap md:flex-row  items-center justify-evenly w-[60vw] m-auto  p-10 shadow-md  ">
          <div className="flex justify-between items-center py-4">
            <div className=" flex justify-center items-center w-10 h-10 bg-primaryColor leading-10 text-4xl text-white text-center rounded-3xl">
              <LuMapPin size={20} className=" w-auto h-auto " />
            </div>
            <span className="flex flex-col justify-center  text-left pl-5 ">
              <p>121 King Street,</p> <p>Melbourne, Victoria 3000 Australia</p>
            </span>{" "}
          </div>

          <div className="flex justify-between items-center py-4">
            <div className=" flex justify-center items-center w-10 h-10 bg-primaryColor leading-10 text-4xl text-white text-center rounded-3xl">
              <IoIosGlobe size={20} className=" w-auto h-auto " />
            </div>
            <span className="flex flex-col justify-center  text-left pl-5 ">
              <p>121 King Street,</p> <p>Melbourne, Victoria 3000 Australia</p>
            </span>{" "}
          </div>

          <div className="flex justify-between items-center py-4">
            <div className=" flex justify-center items-center w-10 h-10 bg-primaryColor leading-10 text-4xl text-white text-center rounded-3xl">
              <IoCallOutline size={20} className=" w-auto h-auto " />
            </div>
            <span className="flex flex-col justify-center  text-left pl-5  ">
              <p>121 King Street,</p> <p>Melbourne, Victoria 3000 Australia</p>
            </span>{" "}
          </div>
        </div>
      </section>

      {/* contact form */}

      <section className="py-5">
        <div className="flex flex-col justify-center items-center text-center w-full my-10">
          <h1 className="text-primaryColor leading-6 text-5xl tracking-widest  pb-4">
            CONTACT FROM
          </h1>
          <p className="text-xl mb-12 text-[#333]">Leave A Message</p>
        </div>
        <div>
          <div className="max-w-lg mx-auto p-6 bg-white rounded-lg ">
            <form onSubmit={handleSubmit}>
              {/* Name and Email fields in the same line */}
              <div className="flex gap-4 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              {/* Website input */}
              <div className="mb-4">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                  placeholder="Your Website"
                />
              </div>

              {/* Comment textarea */}
              <div className="mb-6">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                  placeholder="Write your comment..."
                  rows={4}
                  required
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primaryColor text-white  hover:text-black font-semibold rounded-md hover:bg-transparent hover:border hover:border-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
