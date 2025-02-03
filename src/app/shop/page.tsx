// Install Tailwind CSS before using this code
// https://tailwindcss.com/docs/installation

import Image from 'next/image';
import { Trophy, Shield, Truck, Headphones } from 'lucide-react';
import Header from '../heroheaderimg/page';



export default function OurProducts() {
  const products = [
    { id: 1, name: 'Syltherine', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000' , image: '/Images8.png', isNew: false ,discount: '30%' },
    { id: 2, name: 'Leviosa', price: 'Rp 2.500.000', image: '/Images7.png', isNew: false },
    { id: 3, name: 'Lolito', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', image: '/image3.png', isNew: false },
    { id: 4, name: 'Respira', price: 'Rp 500.000', image: '/Images6.png', isNew: true },
    { id: 5, name: 'Syltherine', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000' , image: '/Images8.png', isNew: false ,discount: '30%' },
    { id: 6, name: 'Leviosa', price: 'Rp 2.500.000', image: '/Images7.png', isNew: false },
    { id: 7, name: 'Lolito', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', image: '/image3.png', isNew: false },
    { id: 8, name: 'Respira', price: 'Rp 500.000', image: '/Images6.png', isNew: true },
    { id: 9, name: 'Syltherine', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000' , image: '/Images8.png',discount: '30%' },
    { id: 10, name: 'Leviosa', price: 'Rp 2.500.000', image: '/Images7.png', isNew: false },
    { id: 11, name: 'Lolito', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', image: '/image3.png', isNew: false },
    { id: 12, name: 'Respira', price: 'Rp 500.000', image: '/Images6.png', isNew: true },
    { id: 13, name: 'Syltherine', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000' , image: '/Images8.png',discount: '30%' },
    { id: 14, name: 'Leviosa', price: 'Rp 2.500.000', image: '/Images7.png', isNew: false },
    { id: 15, name: 'Lolito', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', image: '/image3.png', isNew: false },
    { id: 16, name: 'Respira', price: 'Rp 500.000', image: '/Images6.png', isNew: true },
];

  const features = [
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

  return (
  <>
  <Header sectionName="Shop"/>

 <div className="flex items-center justify-between bg-neutral-50 py-4 px-6 border-b border-gray-200 text-gray-800">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <span>Filter</span>
          </button>
  
          <button className="flex items-center space-x-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6.75h15m-15 4.5h15m-15 4.5h15m-15-4.5l15-4.5m0 0l-15 4.5"
              />
            </svg>
          </button>
        </div>
  
        {/* Center Section */}
        <div className="text-sm">
          <span className="font-medium">Showing</span>
          <span className="mx-1">1–16</span>
          <span className="text-gray-500">of 32 results</span>
        </div>
  
        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <span>Show</span>
            <select className="bg-neutral-50 border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500">
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
          </div>
  
          <div className="flex items-center space-x-2 text-sm">
            <span>Short by</span>
            <select className="bg-neutral-50 border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500">
              <option value="default">Default</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
      </div>
    
    <section className="bg-gray-100 text-white py-12">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2> */}
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
        {/* <div className="mt-8 text-center">
          <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">
            Show More
          </button>
        </div> */}
      </div>
    </section>

    <div className="flex justify-center gap-2 pt-2">
            <a href="#" className="px-3 py-1 bg-yellow-600 rounded-lg text-gray-800">1</a>
            <a href="#" className="px-3 py-1 hover:bg-gray-100 text-gray-800">2</a>
            <a href="#" className="px-3 py-1 hover:bg-gray-100 text-gray-800">3</a>
            <a href="#" className="px-3 py-1 hover:bg-gray-100 text-gray-800">Next</a>
     </div>

      <div className="w-full bg-[#FFF5EE] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

          
    </>
  );
}
