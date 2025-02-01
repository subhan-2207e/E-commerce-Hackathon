import Image from "next/image";

interface sectionName{
    sectionName:string;
}

const Header = (props:sectionName) => {
  return (
    <>
    <div className="relative w-full h-60 md:h-64">
      <div className="absolute inset-0">
        <Image
          src="/heroheaderimg.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

    
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-black">{props.sectionName}</h1>
        <p className="mt-2 text-sm md:text-base text-gray-700">
          <span className="text-black font-bold">Home</span> &gt; {props.sectionName}
        </p>
      </div>
    </div>
    </>
  );
};

export default Header;


// import Image from "next/image";

// interface SectionNameProps {
//   sectionName: string;
// }

// const Header = (props: SectionNameProps) => {
//   return (
//     <div className="relative w-full h-60 md:h-64">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/heroheaderimg.png"
//           alt="Hero header background image with visual design"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//       </div>

//       {/* Content */}
//       <div className="relative flex flex-col items-center justify-center h-full">
//         <h1 className="text-3xl md:text-5xl font-bold text-black">{props.sectionName}</h1>
//         <p className="mt-2 text-sm md:text-base text-gray-700">
//           <span className="text-black font-bold">Home</span> &gt; {props.sectionName}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Header;
