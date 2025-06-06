import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-12 flex flex-row max-sm:flex-row gap-4 items-center justify-between h-full w-full bg-gray-100">
      <div className="py-4 px-2">
        <Image src="/assets/icons/dribble.svg" width={76} height={30} />
      </div>
      <div className="flex max-sm:hidden max-lg:hidden flex-row max-sm:flex-col gap-8 w-2/3 text-xs justify-center items-center font-sans">
        <p>For designers</p>
        <p>Hire talent</p>
        <p>Inspiration</p>
        <p>Advertising</p>
        <p>Blog</p>
        <p>About</p>
        <p>Careers</p>
        <p>Support</p>
      </div>
      <div className="text-xs text-gray-500">@2025 Advay Sanketi</div>
    </div>
  );
};

export default Footer;
