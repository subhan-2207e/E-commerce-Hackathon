"use client";
// import { useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Heart, Share2, RefreshCw, } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Home(){

// import Image from 'next/image';
// import { ButtonHTMLAttributes } from 'react'

// interface ProductCardProps {
//   name: string;
//   description: string;
//   price: number;
//   originalPrice?: number;
//   image?: string;
//   label?: {
//     text: string;
//     type: 'discount' | 'new';
//   };
// }

// const images = [
//   "/Rectangle361.png",
//   "/Rectangle381.png",
//   "/images/setup3.jpg",
//   "/images/setup4.jpg",
//   "/images/setup5.jpg",
//   "/images/setup6.jpg",
//   "/images/setup7.jpg",
//   "/images/setup8.jpg",
// ];

const products = [
  { id: 1, name: 'Syltherine', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000' , image: '/Images8.png', isNew: false ,discount: '30%' },
  { id: 2, name: 'Leviosa', price: 'Rp 2.500.000', image: '/Images7.png', isNew: false },
  { id: 3, name: 'Lolito', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', image: '/image3.png', isNew: false },
  { id: 4, name: 'Respira', price: 'Rp 500.000', image: '/Images6.png', isNew: true },
  { id: 5, name: 'Syltherine', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000' , image: '/Images8.png', isNew: false ,discount: '30%' },
  { id: 6, name: 'Leviosa', price: 'Rp 2.500.000', image: '/Images7.png', isNew: false },
  { id: 7, name: 'Lolito', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', image: '/image3.png', isNew: false },
  { id: 8, name: 'Respira', price: 'Rp 500.000', image: '/Images6.png', isNew: true },
];


// function ProductCardInner({
//   name,
//   description,
//   price,
//   originalPrice,
//   // image,
//   label,
// }: ProductCardProps) {
//   return (

// <>
   
//     <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white">
//       <div className="relative aspect-square overflow-hidden">
//         <Image
//           src={"/Images1\.png"}
//           alt={name}
//           width={200}
//           height={200}
//           className="object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//         {label && (
//           <div
//             className={`absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-medium text-white ${
//               label.type === 'discount' ? 'bg-red-400' : 'bg-emerald-400'
//             }`}
//           >
//             {label.text}
//           </div>
//         )}
//         <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
//           <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full">
//             <Share2 className="h-4 w-4" />
//           </Button>
//           <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full">
//             <RefreshCw className="h-4 w-4" />
//           </Button>
//           <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full">
//             <Heart className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//       <div className="flex flex-1 flex-col space-y-2 p-4">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <p className="text-sm text-gray-500">{description}</p>
//         <div className="flex items-center gap-2">
//           <span className="text-lg font-bold">Rp {price.toLocaleString()}</span>
//           {originalPrice && (
//             <span className="text-sm text-gray-400 line-through">
//               Rp {originalPrice.toLocaleString()}
//             </span>
//           )}
//         </div>
//         <Button className="mt-auto w-full bg-[#B88E2F] text-white hover:bg-[#9E7A29]">
//           Add to cart
//         </Button>
//       </div>
//     </div>
//     </>
//   );
// }
    return(
<>
<section
    //   ref={containerRef}
      className="relative w-full min-h-[400px] mb-20 md:mb-32 lg:mb-44 overflow-hidden"
    >
      <div
        // ref={imageWrapperRef}
        className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <Image
          src="/heroheaderimgg.png"
          alt="Showcase of our latest furniture collection"
          className="object-cover"
          priority
          fill
          sizes="100vw"
        />
      </div>

      <div
        // ref={contentRef}
        className="absolute top-1/2 left-4 right-4 md:left-auto md:right-8 lg:right-16 
                 transform -translate-y-1/2 
                 w-auto md:w-[26rem] lg:w-[29rem] 
                 bg-[#FFF3E3]/90 backdrop-blur-sm
                 border-2 rounded-lg 
                 p-6 md:p-10 lg:p-14 
                 flex flex-col gap-4 md:gap-6 lg:gap-8"
      >
        <span className="block font-bold text-xs md:text-sm tracking-wider text-gray-700">
          NEW ARRIVAL
        </span>

        <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-extrabold text-[#B88E2F] leading-tight">
          Discover Our <br className="hidden md:block" /> New Collection
        </h1>

        <p className="text-sm md:text-base leading-relaxed text-gray-700">
          Explore premium quality with our latest designs. Find the perfect pieces to elevate your space.
        </p>

        <Link
        //   ref={buttonRef}
          href="/shop"
          aria-label="Shop the new collection"
          className="inline-flex items-center justify-center
                   bg-[#B88E2F] text-white 
                   px-6 md:px-8 lg:px-12 py-3 md:py-4
                   text-sm md:text-base
                   transition-all duration-300
                   hover:bg-[#9E7B2A]
                   focus:ring-2 focus:ring-offset-2 focus:ring-[#B88E2F]
                   rounded-md"
        //   onMouseEnter={() => setIsHovered(true)}
        //   onMouseLeave={() => setIsHovered(false)}
        >
          <span className="inline-block">BUY NOW</span>
        </Link>
      </div>
    </section>

    <div className="p-6">
    {/* Title Section */}
    <div className="text-center mb-10">
      <h1 className="text-3xl font-semibold">Browse The Range</h1>
      <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    {/* Grid Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Dining Section */}
      <div className="relative group">
        <Image
          src="/MaskGroup4.png"
          alt="Dining"
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
         <div className="flex flex-1 flex-col space-y-5 p-4 ">
         <h2 className="text-black text-center text-xl font-medium">Dining</h2>
         </div>
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
        </div> */}
      </div>

      {/* Living Section */}
      <div className="relative group">
        <Image
          src="/livingroom.png"
          alt="Living" width={100} height={100}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
          <h2 className="text-white text-xl font-medium">Living</h2>
        </div> */}
         <div className="flex flex-1 flex-col space-y-5 p-4 ">
         <h2 className="text-black text-center text-xl font-medium">Living</h2>
         </div>
      </div>

      {/* Bedroom Section */}
      <div className="relative group">
        <Image
          src="/MaskGroup5.png"
          alt="Bedroom"
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
          <h2 className="text-white text-xl font-medium">Bedroom</h2>
        </div> */}
         <div className="flex flex-1 flex-col space-y-5 p-4 ">
         <h2 className="text-black text-center text-xl font-medium">Bedroom</h2>
         </div>
      </div>
    </div>
  </div>

    {/* <section className="py-12">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Our Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCardInner key={product.name} {...product} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white rounded-lg border px-8 py-2 font-medium transition-colors">
            Show More
          </button>
        </div>
      </div>
    </section> */}

<section className="bg-gray-100 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-black text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white text-black shadow overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{product.discount}
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="text-sm mb-2">
                  <span className="font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="line-through text-gray-500 ml-2">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                {/* <button className="mt-2 bg-yellow-500 text-white text-sm py-2 px-4 rounded hover:bg-yellow-600">
                  Add to cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="border-[#B88E2F] item-center text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white rounded-lg border px-8 py-2 font-medium transition-colors">
            Show More
          </button>
        </div>
        {/* <div className="mt-8 text-center">
          <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">
            Show More
          </button>
        </div> */}
      </div>
    </section>

    <div className="bg-[#fef8f3] min-h-screen p-6">
      {/* Main Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-gray-600 mt-4">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-600 text-white text-lg rounded-md hover:bg-yellow-700 transition-all">
            Explore More
          </button>
        </div>

        {/* Right Content - Carousel */}
        <div className=" relative">
          <div className="relative">
            <Image
              src="/Image1.png"
              alt="Room Inspiration"
              width={200}
              height={200}
              className=" shadow-lg w-80 h-96"
            />
            {/* Overlay Content */}
            {/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-md shadow-lg">
              <p className="text-sm text-gray-700">01 — Bed Room</p>
              <h3 className="text-xl font-semibold text-gray-900">Inner Peace</h3>
            </div> */}
          </div>

          
          {/* Dots and Navigation */}
       
          {/* <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button className="w-10 h-10 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700">
              &rarr;
            </button>
          </div> */}
        </div>

        <div className="relative">
            <Image
              src="/Rectangle 251.png"
              alt="Room Inspiration"
              width={200}
              height={200}
              className=" shadow-lg w-80 h-80"
            />

          <div className="flex justify-center items-start gap-2 mt-4">
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
          </div>
      </div>
    </div>

    {/* <div className="bg-white min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Share your setup with
        </h1>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          #FuniroFurniture
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="h-80 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/Rectangle36.png"
            alt="Setup 1"
            width={100}
            height={200}
            className="w-5 h-full object-cover"
          />
        </div>
        <div className="h-56 mt-20 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/Rectangle38.png"
            alt="Setup 2"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-80 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/setup3.jpg"
            alt="Setup 3"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-80 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/setup4.jpg"
            alt="Setup 4"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-80 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/setup5.jpg"
            alt="Setup 5"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-80 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/setup6.jpg"
            alt="Setup 6"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-80 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/setup7.jpg"
            alt="Setup 7"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-80 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/setup8.jpg"
            alt="Setup 8"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-80 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/setup9.jpg"
            alt="Setup 9"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div> */}



<div className="min-h-screen bg-[#fef8f3] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-medium text-black mb-2">Share your setup with</h1>
          <p className="text-3xl md:text-5xl font-bold text-black">#FuniroFurniture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="relative h-[400px] group">
              <Image
                src="/Rectangle381.png"
                alt="Workspace setup with laptop and vintage radio"
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
            <div className="relative h-[300px] group">
              <Image
                src="/Rectangle381.png"
                alt="Wooden stools with decorative items"
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-4">
            <div className="relative h-[500px] group">
              <Image
                src="/Rectangle381.png"
                alt="Dining area with white chairs"
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
            <div className="relative h-[250px] group">
              <Image
                src="/Rectangle381.png"
                alt="Vintage brown armchair"
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="relative h-[350px] group">
              <Image
                src="/Rectangle381.png"
                alt="Modern bedroom with beige tones"
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
            <div className="relative h-[200px] group">
              <Image
                src="/Rectangle381.png"
                alt="Minimalist wall decor"
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
            <div className="relative h-[250px] group">
              <Image
                src="/Rectangle361.png"
                alt="Kitchen wall with geometric patterns"
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</>
    )
}