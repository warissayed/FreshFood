"use client";
import Link from "next/link";
import { useCartStore } from "../Store/Store";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const handleClearCart = () => {
    clearCart();
  };
  const cartItems = cart || [];
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      parseFloat(
        item.product.DiscountedPrice.replace("$", "").replace(" USD", "")
      ) *
        item.quantity,
    0
  );

  return (
    <main>
      <section>
        <div className="bg-[url('/Image/Headerimg.webp')] bg-cover bg-center h-auto">
          <h1 className="text-center text-white text-7xl tracking-widest py-5 ">
            YOUR SHOPPING CART
          </h1>

          <div className="flex items-center justify-center pb-4 gap-5 text-white">
            <Link href={"/"}>Home</Link> <FaCaretRight />
            <Link className="text-primaryColor" href={"/Login"}>
              YOUR SHOPPING CART
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-primaryColor w-auto  p-4 mt-4  md:m-6 h-14  md:p-4 flex justify-between items-center">
          <h3 className="text-white text-lg md:text-xl font-bold">Product</h3>
          <div className="flex  justify-evenly items-center w-1/2 ml-20 md:ml-48">
            <h3 className="md:text-xl text-white font-bold text-lg">Price</h3>
            <h3 className="md:text-xl text-white font-bold text-base">
              Quantity
            </h3>
          </div>

          <h3 className="text-white text-lg md:text-xl font-bold">Total</h3>
        </div>
      </section>

      <div className="m-auto  py-4  px-0 md:px-2">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="w-auto mx-0 md:mx-4 flex justify-normal md:justify-between  items-center "
                >
                  <div className="flex items-center">
                    <Image
                      src={item.product.image}
                      alt={item.product.Title}
                      width={200}
                      height={200}
                      className="object-cover w-2/4"
                    />
                    <div className=" ml-0 md:ml-4">
                      <h3 className="md:font-semibold text-xs md:text-base font-normal">
                        {item.product.Title}
                      </h3>
                      <p className="md:font-semibold text-xs md:text-base font-normal">
                        {item.product.Product}
                      </p>
                      <p className="md:font-semibold text-xs md:text-base font-normal">
                        {item.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-evenly items-center w-1/2">
                    <span className="md:font-semibold text-xs md:text-base font-normal pr-3 md:pr-0">
                      {item.product.DiscountedPrice}
                    </span>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.product.id, e)}
                      className="w-14 h-10 p-2 border rounded-md"
                    />
                  </div>

                  <div className="flex flex-col items-center space-x-4">
                    <p className="py-3 font-medium text-base md:text-xl">
                      {totalPrice}
                    </p>
                    <button
                      onClick={() => handleRemove(item.product.id)}
                      className="text-red-500 hover:text-red-700 pr-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center px-3 border-y border-gray-300 py-5">
              <p className="text-xl font-semibold">Total:</p>
              <p
                onClick={handleClearCart}
                className=" inline-block text-primaryColor text-xl font-semibold"
              >
                ${totalPrice.toFixed(2)}
              </p>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">
                  Add a note to your order
                </p>
                <Textarea
                  placeholder="Type your message here."
                  className="resize-none my-4 w-3/4"
                />
              </div>

              <div>
                <div className="flex flex-row gap-3 w-full pr-4">
                  <Link href={"/all-products"} className="w-auto">
                    <button className="mt-4 py-4 md:py-2 px-1 md:px-4 bg-transparent border  text-sm md:text-base  border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white w-full text-center  ">
                      {" "}
                      Update Cart
                    </button>
                  </Link>
                  <Link href={"/check-out"} className="w-auto ">
                    <button className="mt-4 py-4 md:py-2 px-1 md:px-4 bg-primaryColor border  text-sm md:text-base border-gray-300 hover:border-primaryColor text-white hover:bg-transparent hover:text-primaryColor w-full text-center ">
                      Check out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
