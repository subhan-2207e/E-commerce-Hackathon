import Image from "next/image"

interface HeaderProps {
  sectionName: string;
}

export function Header (props:HeaderProps)  {
  return (
    <div className="relative w-full h-60 md:h-64">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/heroheaderimg.png"
          alt="Hero header background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div> {/* Light overlay */}
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-black">{props.sectionName}</h1>
        <p className="mt-2 text-sm md:text-base text-black">
          <span className="text-black font-bold">Home</span> &gt; {props.sectionName}
        </p>
      </div>
    </div>
  )
}

