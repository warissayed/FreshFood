"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

const page: React.FC = () => {
  const [country, setCountry] = useState("");
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);

  // State for "Add New Address" form
  const [addressFormData, setAddressFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  // State for "Edit Address" form
  const [editAddressFormData, setEditAddressFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  // Handle change for "Add New Address" form
  const handleAddressFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAddressFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle change for "Edit Address" form
  const handleEditAddressFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditAddressFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit for "Add New Address" form
  const handleAddressFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Address Submitted:", addressFormData);
  };

  // Handle submit for "Edit Address" form....
  const handleEditAddressFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Edited Address Submitted:", editAddressFormData);
  };

  //  toggle for the Edit address form .....
  const toggleEditFormVisibility = () => {
    setIsEditFormVisible(!isEditFormVisible);
  };
  // this is the toggle for the  New Address form
  const toggleAddressFormVisibility = () => {
    setIsAddressFormVisible(!isAddressFormVisible);
  };

  return (
    <div>
      <section>
        <div className="w-full h-[60vh] flex flex-wrap justify-between items-center m-auto px-5">
          <div className="flex flex-col justify-center w-1/2 h-full m-auto py-5">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="Heading_border text-2xl my-2">Your Addresses</h1>
              <Link href={"/"} className="text-primaryColor">
                Return to Account Details
              </Link>
            </div>
            <div className="my-4 ">
              <button
                onClick={toggleAddressFormVisibility}
                className="py-2 px-2 bg-primaryColor text-white text-lg font-semibold w-auto hover:text-gray-500 hover:bg-transparent border"
              >
                ADD A New ADDRESS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Address Form Section */}
      {isAddressFormVisible && (
        <section className="py-5 ">
          <div className="flex flex-col justify-center items-center text-center w-full my-10">
            <h1 className="text-primaryColor leading-6 text-5xl tracking-widest pb-4">
              Addresses Form
            </h1>
            <p className="text-xl mb-12 text-[#333]">Add a New Address</p>
          </div>
          <div>
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg border-b border-gray-300">
              <p className="Heading_border mb-4">Add a New Address</p>
              <form onSubmit={handleAddressFormSubmit}>
                {/* Name and Email fields in the same line */}
                <div className="flex gap-4 mb-4 ">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={addressFormData.firstName}
                      onChange={handleAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={addressFormData.lastName}
                      onChange={handleAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Address fields */}
                <div className="mb-4">
                  <label
                    htmlFor="address1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address 1
                  </label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={addressFormData.address1}
                    onChange={handleAddressFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="Address 1"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address 2
                  </label>
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    value={addressFormData.address2}
                    onChange={handleAddressFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="Address 2"
                  />
                </div>

                {/* City and Country */}
                <div className="flex gap-4 mb-4">
                  <div className="w-full">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={addressFormData.city}
                      onChange={handleAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md "
                    >
                      <option value="">---</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                    </select>
                  </div>
                </div>

                {/* Postal Code and Phone */}
                <div className="flex gap-4 mb-4">
                  <div className="w-full">
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal/Zip Code
                    </label>
                    <input
                      type="number"
                      id="postalCode"
                      name="postalCode"
                      value={addressFormData.postalCode}
                      onChange={handleAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="Postal/Zip Code"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={addressFormData.phone}
                      onChange={handleAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="flex flex-col justify-start gap-4">
                  <p>Set as default address</p>
                  <div>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-primaryColor text-white hover:text-black font-semibold rounded-md hover:bg-transparent hover:border hover:border-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    >
                      Submit
                    </button>
                  </div>
                  <p className="text-[#333] text-sm font-semibold">Cancel</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-gray-500 py-2 font-bold">Default</h3>
          <p className="text-gray-500">Xyz xyz</p>
          <p className="text-gray-500">India</p>

          <div className="py-4">
            <button
              onClick={toggleEditFormVisibility}
              className="text-white bg-primaryColor py-2 px-16 mr-5"
            >
              Edit
            </button>
            <button className="text-white bg-primaryColor py-2 px-16">
              Delete
            </button>
          </div>
        </div>
      </section>

      {/* Edit Address Section */}
      {isEditFormVisible && (
        <section>
          <div>
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg mb-3 border-b">
              <h1 className="text-4xl">Edit Address Form</h1>
              <form onSubmit={handleEditAddressFormSubmit}>
                <div className="flex gap-4 mb-4">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={editAddressFormData.firstName}
                      onChange={handleEditAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={editAddressFormData.lastName}
                      onChange={handleEditAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Address fields */}
                <div className="mb-4">
                  <label
                    htmlFor="address1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address 1
                  </label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={editAddressFormData.address1}
                    onChange={handleEditAddressFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="Address 1"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address 2
                  </label>
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    value={editAddressFormData.address2}
                    onChange={handleEditAddressFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    placeholder="Address 2"
                  />
                </div>

                {/* City and Country */}
                <div className="flex gap-4 mb-4">
                  <div className="w-full">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={editAddressFormData.city}
                      onChange={handleEditAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      value={editAddressFormData.country}
                      onChange={handleEditAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">---</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                    </select>
                  </div>
                </div>

                {/* Postal Code and Phone */}
                <div className="flex gap-4 mb-4">
                  <div className="w-full">
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal/Zip Code
                    </label>
                    <input
                      type="number"
                      id="postalCode"
                      name="postalCode"
                      value={editAddressFormData.postalCode}
                      onChange={handleEditAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="Postal/Zip Code"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={editAddressFormData.phone}
                      onChange={handleEditAddressFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="flex flex-col justify-start gap-4">
                  <p>Set as default address</p>
                  <div>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-primaryColor text-white hover:text-black font-semibold rounded-md hover:bg-transparent hover:border hover:border-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    >
                      Submit
                    </button>
                  </div>
                  <p className="text-[#333] text-sm font-semibold">Cancel</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default page;
