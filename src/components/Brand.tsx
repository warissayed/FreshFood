import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Brand = () => {
  return (
    <div>
      <main className="bg-[url('/Image/7.webp')] bg-cover bg-center h-80">
        <div className="flex flex-col items-center justify-center py-8">
          <h1 className="font-bold text-white text-4xl">Our Suppliers</h1>
          <div className="flex items-center justify-center py-3">
            <Image
              src={"/Image/title-line.png"}
              alt="Title png"
              height={80}
              width={80}
            />
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand1.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand2.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand3.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand4.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand5.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand6.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand1.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand2.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand3.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand4.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand5.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40"
              />
            </CarouselItem>
            <CarouselItem className="  lg:basis-1/6 md:basis-1/4 basis-1/3  flex justify-center items-center">
              <Image
                src={"/Image/brand6.webp"}
                alt="Brand Image"
                height={120}
                width={160}
                className="sm:h-32 sm:w-40 md:h-38 md:w-44 lg:h-32 lg:w-40 xl:h-32 xl:w-40 "
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
        </Carousel>
      </main>
    </div>
  );
};

export default Brand;
