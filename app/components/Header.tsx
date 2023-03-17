import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BiAlignRight } from "react-icons/bi";

export default function Header() {
  return (
    <div className="flex justify-between items-center absolute md:px-9 px-5 py-2 w-full">
      <div>
        <Image
          src="/logo-text_dao.png"
          alt="panaverce dao"
          width={120}
          height={120}
        />
      </div>
      <div>
        {/* hidden use hwa h sb devices k liye agr hm kehte hai mediem device se upr sb pe sow ho 
        to md likh dn gy as code mai md k sth flex use hwa h as ka mtlb h k mediem device or mdeiem se 
        bri device show hn flex ko use kr k
        */}
        <ul className="hidden md:flex space-x-4 text-lg font-semibold ">
          <li className="hover:text-blue-400 pt-[9px]">
            <Link href={"/"}> Home</Link>
          </li>
          <li className="hover:text-blue-400 pt-[9px]">
            <Link href={"/"}>Explore</Link>
          </li>
          <li className="hover:text-blue-400 pt-[9px]">
            <Link href={"/"}>About</Link>
          </li>
          <li className="hover:text-blue-400 pt-[9px]">
            <Link href={"/"}>Contact</Link>
          </li>
          <div>
            <button className="bg-blue-400 px-6 py-2 text-white rounded-xl text-xl font-semibold hover:bg-blue-600 hover:animate-bounce"  >
              Apply
            </button>
          </div>
        </ul>
      </div>
      <div className="static md:hidden text-3xl"><BiAlignRight/></div>
    </div>
  );
}
