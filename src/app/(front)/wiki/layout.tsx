"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

type WikiProps = {
  children: React.ReactNode;
};

const WikiLayout: React.FC<WikiProps> = ({ children }) => {
  const pathname = usePathname();

  let imageSrc: string = "/unnamed.png";
  let name: string = "Err";

  if (pathname.includes("/danielius")) {
    imageSrc = "/danielius.png";
    name = "Danielius";
  } else if (pathname.includes("/vakaris")) {
    imageSrc = "/vakaris.png";
    name = "Vakaris";
  } else if (pathname.includes("eivydas")) {
    imageSrc = "/eivydasPic.png";
    name = "Eivydas";
  }

  return (
    <>
      {/* Main container */}
      <div className="flex flex-row w-full h-full ">
        <div className="fixed left-0 top-0 w-[15%] h-full flex flex-col justify-center items-center p-4 gap-y-2">
          {/* Sidebar */}
          <h1 className="text-2xl font-bold">Content</h1>
          <a href="#">(Top)</a>
          <a href={"#" + name}>{name}</a>
          <a href="#Biography">Biography</a>
          <a href="#Skills">Skills</a>
          <a href="#Notes">Notes</a>
        </div>
        {/* Content */}
        <div className="w-full h-full flex ml-[15%]">
          <div className="flex flex-col scroll-container">{children}</div>

          <div className="w-[100%] h-full mt-12 ml-12">
            {/* With table and picture */}
            <Image src={imageSrc} width={500} height={500} alt="Image source" />
            {/* Make a table with html */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WikiLayout;
