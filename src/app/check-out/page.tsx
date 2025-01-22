"use client";
import { useState } from "react";
import { useCartStore } from "../Store/Store"; // Assuming you're using Zustand to manage your
import Image from "next/image";
import { PiMoneyWavyThin } from "react-icons/pi";

const CheckoutPage = () => {
  // For managing the form input
  const [email, setEmail] = useState("");
  const [newsOffers, setNewsOffers] = useState(false);
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const cart = useCartStore((state) => state.cart);

  // For calculating totals
  const cartItems = cart || [];
  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      parseFloat(
        item.product.DiscountedPrice.replace("$", "").replace(" USD", "")
      ) *
        item.quantity,
    0
  );
  const shipping = 20.0; // Fixed shipping cost
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process checkout form submission here (e.g., payment)
    alert("Order placed successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-6">
      {/* Left side - Contact and Shipping Information */}
      <div className="w-full md:w-1/2 space-y-6 border-t px-4">
        <h2 className="text-xl font-semibold mb-4 pt-4">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex items-center mt-2 pl-4">
              <input
                type="checkbox"
                checked={newsOffers}
                onChange={() => setNewsOffers(!newsOffers)}
                className="mr-2 "
              />
              <span className="text-sm">Email me with news and offers</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 pt-4">Delivery </h3>
          <div>
            <label className="block font-medium">Country / Region</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-lg font-medium">First Name</label>
              <input
                type="text"
                placeholder="First Name (optional)"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-lg font-medium">Address</label>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-lg font-medium">
              Apartment, Suite, etc.
            </label>
            <input
              type="text"
              placeholder="Apartment, Suite, etc.(optional)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-lg font-medium">City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Postal Code</label>
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              checked={saveInfo}
              onChange={() => setSaveInfo(!saveInfo)}
              className="mr-2"
            />
            <span className="text-sm">Save this information for next time</span>
          </div>

          <div className="my-6">
            <h3 className="text-2xl font-semibold">Shopping Method</h3>
            <div
              className="flex justify-between items-center mt-2 bg-gray-200 py-2
            px-2 rounded"
            >
              <span>International Shipping</span>
              <span className="font-semibold">${shipping}</span>
            </div>
          </div>

          <div className="my-6">
            <h3 className="text-2xl font-semibold">Payment</h3>
            <div className="mt-2 text-sm text-gray-600">
              <p className="pl-2">All transactions are secure and encrypted.</p>
              <div className=" mt-2">
                <span className="ml-2 flex flex-col justify-center items-center border border-gray-200 bg-gray-200 m-auto py-7 rounded">
                  <PiMoneyWavyThin size={60} />
                  This store can&apos;t accept payment right now
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-gray-200 text-gray-500 rounded-md"
          >
            Pay Now
          </button>
        </form>
      </div>

      {/* Right side - Cart Summary */}
      <div className="w-full md:w-1/2 space-y-6 border-l border-t px-4 bg-gray-100 ">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between items-center"
            >
              <Image
                src={item.product.image}
                alt={item.product.Title}
                width={100}
                height={100}
                className="object-cover"
              />
              <div className="flex-grow ml-4">
                <p className="font-semibold">{item.product.Title}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
                <p className="text-sm">Size: {item.size}</p>
              </div>
              <div className="ml-4">
                <p className="font-semibold">
                  $
                  {item.product.DiscountedPrice.replace("$", "").replace(
                    " USD",
                    ""
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-semibold">Shipping</span>
          <span className="font-semibold">${shipping}</span>
        </div>

        <div className="mt-4 flex justify-between items-center text-xl font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
