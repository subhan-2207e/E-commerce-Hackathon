'use client';

import Image from 'next/image';

interface SectionNameProp{
  sectionName:string;
}

export default function Header(props:SectionNameProp) {
  return (
    <div className="relative w-full h-[250px] flex items-center justify-center text-center bg-gray-100">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <Image
          src="/heroheaderimg.png" // Replace with your actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          // className="blur-md"
        />
      </div>
      
      {/* Content Overlay */}
      {/* <div className="relative z-10 text-black">
        <h1 className="text-3xl font-bold">{props.sectionName}</h1>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Home</span> &gt; {props.sectionName}
        </p>
      </div> */}
        <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-black">{props.sectionName}</h1>
        <p className="mt-2 text-sm md:text-base text-black">
          <span className="text-black font-bold">Home</span> &gt; {props.sectionName}
        </p>
      </div>
    </div>
  );
}
