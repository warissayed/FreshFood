"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useCartStore } from "../../Store/Store";
import ProductsData from "@/api/ProductData";
import Image from "next/image";
import {
  FaCaretRight,
  FaFacebook,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IoLogoGoogleplus } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";

interface Product {
  id: number;
  image: string;
  Title: string;
  Price: string;
  DiscountedPrice: string;
  Product: string;
  summary: string;
}

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<"S" | "M" | "L" | "XL">("M");

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    if (id) {
      const foundProduct = ProductsData.find(
        (product) => product.id === parseInt(id as string)
      );
      setProduct(foundProduct);
    }
  }, [id]);

  const handleQuantityChange = (action: "increase" | "decrease") => {
    setQuantity((prevQuantity) => {
      let newQuantity = prevQuantity;

      if (action === "increase") {
        newQuantity += 1;
      } else if (action === "decrease" && prevQuantity > 1) {
        newQuantity -= 1;
      }
      return newQuantity;
    });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value as "S" | "M" | "L" | "XL");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section>
        <div className="bg-[url('/Image/AllProductBg.webp')] bg-cover bg-center h-auto">
          <h1 className="text-center text-white text-7xl tracking-widest py-5 ">
            {product.Title}
          </h1>

          <div className="flex items-center justify-center pb-4 gap-5 text-white">
            <Link href={"/"}>Home</Link> <FaCaretRight />
            <Link className="text-white" href={"/all-products"}>
              ALL PRODUCTS
            </Link>
            <FaCaretRight />
            <Link className="text-primaryColor" href={`/product/${product.id}`}>
              {product.Title}
            </Link>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <Image
              src={product.image}
              alt={product.Title}
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold py-4">{product.Title}</h1>
            <p className="text-xl text-gray-600 mt-2">{product.Product}</p>

            {/* Price Section */}
            <div className="mt-4 flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                {" "}
                <span className="text-2xl text-gray-500 line-through">
                  {product.Price}
                </span>
                <span className="text-4xl  text-primaryColor">
                  {product.DiscountedPrice}
                </span>
              </div>
              <div className="flex justify-start gap-10 items-center">
                {/* Size Selector */}

                <div className="flex flex-col w-1/2 items-start space-x-4">
                  <label htmlFor="size" className="font-bold">
                    Size:
                  </label>
                  <select
                    id="size"
                    value={size}
                    onChange={handleSizeChange}
                    className="py-2 w-full px-4 border border-gray-500"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>

                {/* Quantity Selector */}
                <div className="flex flex-col w-1/2 items-start space-x-4">
                  <label htmlFor="quantity" className="font-bold ">
                    Quantity:
                  </label>
                  <div className="flex justify-evenly items-center border border-gray-500 ">
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="py-1  w-full text-2xl font-bold "
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={quantity}
                      readOnly
                      className=" w-full text-center py-1 border-none"
                    />
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="py-1  w-full text-2xl font-bold "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6">
              <button
                onClick={() => addToCart({ product, quantity, size })}
                className="py-2 px-6 bg-primaryColor text-white border  hover:border-primaryColor hover:bg-transparent hover:text-primaryColor"
              >
                Add to Cart
              </button>
            </div>
            <div className="max-w-4xl mx-auto p-6">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-bold focus:text-primaryColor">
                      Description
                    </AccordionTrigger>
                    <AccordionContent>{product.summary}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-bold focus:text-primaryColor">
                      Custom Tab
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-gray-500 text-xl py-2">
                          Brand Hong Quat Packaging
                        </p>
                        <p className="text-gray-500 text-xl py-2">Kg 54g</p>
                        <p className="text-gray-500 text-xl py-2">
                          Calo 36 Calo
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl font-bold focus:text-primaryColor">
                      Review
                    </AccordionTrigger>
                    <AccordionContent>
                      <section>
                        <div className="flex justify-start items-center gap-5  py-5">
                          <Image
                            src={"/Image/AboutUs/our_team_image1.avif"}
                            alt="Comment Image"
                            height={60}
                            width={60}
                          />{" "}
                          <div className="border-b border-gray-200 pb-5">
                            <div className="flex justify-start items-center gap-5">
                              <h3>JONH</h3>
                              <li className="list-square list-inside text-sm text-gray-400">
                                July 25,2017
                              </li>
                            </div>
                            <h4 className="text-sm text-gray-400">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque.
                            </h4>
                          </div>
                        </div>

                        <div className="flex justify-start items-center gap-5 py-5">
                          <Image
                            src={"/Image/AboutUs/our_team_image2.avif"}
                            alt="Comment Image"
                            height={60}
                            width={60}
                          />{" "}
                          <div className="border-b border-gray-200 pb-5">
                            <div className="flex justify-start items-center gap-5">
                              <h3>JONH</h3>
                              <li className=" list-square list-inside text-sm text-gray-400">
                                July 25,2017
                              </li>
                            </div>
                            <h4 className="text-sm text-gray-400">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque.
                            </h4>
                          </div>
                        </div>
                      </section>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className={"flex items-center  my-5"}>
                <span className="text-gray-900 font-bold pr-4 ">
                  SHARE THIS :
                </span>{" "}
                <span className="flex items-center gap-4">
                  <FaTwitterSquare className="text-[#55acee]" size={25} />
                  <FaFacebook className="text-[#3b5998]" size={25} />
                  <IoLogoGoogleplus className="text-[#e04c86]" size={25} />
                  <FaPinterest className="text-[#bd081c]" size={25} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-gray-500 text-4xl">Upsell product</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ProductsData.map((product: Product) => (
              <div
                key={product.id}
                className="relative flex flex-col items-center bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-primaryColor group"
              >
                {/* Product Image */}
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.Title}
                    width={160}
                    height={100}
                    layout="intrinsic"
                    className="w-4/5 h-4/5 object-cover rounded-md"
                  />
                </Link>

                {/* Product Title */}
                <h3 className="pt-1 text-xl font-semibold text-center">
                  {product.Title}
                </h3>

                {/* Product Price */}
                <div className="flex justify-center pt-1 text-center">
                  <span className="text-lg font-medium text-gray-600 line-through mr-2">
                    {product.Price || "-"}
                  </span>
                  {product.DiscountedPrice ? (
                    <span className="text-lg font-bold text-primaryColor">
                      {product.DiscountedPrice}
                    </span>
                  ) : (
                    <span className="text-lg font-medium text-gray-600">
                      - Loading -
                    </span>
                  )}
                </div>

                {/* Hover Box with Icons */}
                <div className="absolute inset-x-0 flex left-10 bottom-28 justify-evenly items-center p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 bg-gray-100 shadow-lg rounded-full w-3/4">
                  <Link href={`/product/${product.id}`} className=" px-1  ">
                    <BsBag className="text-black" size={16} />
                  </Link>
                  <Link
                    href={"/Login"}
                    className=" border-x px-5  border-gray-500 "
                  >
                    <CiHeart className="text-black" size={16} />
                  </Link>
                  <button className="px-1 ">
                    <CiSearch className="text-black" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
