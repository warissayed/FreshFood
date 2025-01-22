"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnFocusIn: true }));

  return (
    <main className="h-[65vh] auto w-auto">
      <div className="flex justify-center items-center w-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-none"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="relative">
                <Image
                  src={
                    index === 0
                      ? "/Image/Food.jpg"
                      : index === 1
                      ? "/Image/FruitSalad.jpg"
                      : "/Image/Pancake.jpg"
                  }
                  alt="Food Image"
                  width={1600}
                  height={900}
                  className="w-full h-[75vh] lg:h-[75vh] md:h-auto sm:h-auto object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
                  <h2 className="text-5xl lg:text-7xl font-bold mb-4 text-black">
                    {index === 0
                      ? "Delicious Fresh Salad"
                      : index === 1
                      ? "Refreshing Fruit Salad"
                      : "Fluffy Pancakes"}
                  </h2>
                  <p className="text-xl lg:text-3xl md:text-2xl text-gray-600 mb-4">
                    {index === 0
                      ? "A healthy start to your day"
                      : index === 1
                      ? "Packed with vitamins and energy"
                      : "Indulge in a sweet breakfast treat"}
                  </p>
                  <button className="bg-primaryColor w-40 h-12 text-lg my-6 hover:bg-transparent hover:border-2 hover:border-primaryColor hover:text-primaryColor">
                    Shop Now
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
        </Carousel>
      </div>
    </main>
  );
};

export default Hero;
