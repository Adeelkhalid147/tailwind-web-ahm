"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <>
    <div className="md:flex align-middle gap-[30px] p-[50px] bg-black">
      {/* .shine se light jsa code show hta h or uper use client lgna b zrori h main div mai code likh k
      jis ko shine krwana ho wha clasName mai shine likh dna h */}
    <style jsx >{`
      .shine{
  text-shadow: 0 0 35px hsl(0deg 0% 100% / 64%);    
  background-image: none;
  color: #fff;
  text-decoration: none;
  text-shadow: 0 0 25px hsl(0deg 0% 100% / 64%);
  background-clip: border-box;
  -webkit-text-fill-color: inherit;
}
      `}</style>
      <div  className="md:w-1/4  mb-[20px] md:md-[0px]">
        <h1 className="text-white text-5xl font-bold border-l-blue-600 border-l-[6px] pl-[10px] shine">About Us</h1>
        <Image
          src="/logo-text_dao.png"
          alt="Dao logo"
          height={100}
          width={100}
          />
        <p className="text-gray-400">
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread
        </p>
      </div>
      <div className="md:w-1/4 mb-[20px]">
        <h1 className="text-white text-5xl font-bold border-l-blue-600 border-l-[6px] pl-[10px] shine">Useful Links</h1>
        <ul className="text-gray-400 pt-[30px]">
            <li><Link href={"/"} className="hover:text-white">Home</Link></li>
            <li><Link href={"/"} className="hover:text-white">Explore</Link></li>
            <li><Link href={"/"} className="hover:text-white">About</Link></li>
            <li><Link href={"/"} className="hover:text-white">Contact</Link></li>
            <li><Link href={"/"} className="hover:text-white">Syllabus</Link></li>

        </ul>
       
      </div>
      <div className="md:w-1/4 mb-[20px]">
        <h1 className="text-white text-5xl font-bold border-l-blue-600 border-l-[6px] pl-[10px] shine">Follow Us</h1>
        <ul className="text-gray-400 pt-[30px]">
            <li><Link href={"/"} className="hover:text-white">facebook</Link></li>
            <li><Link href={"/"} className="hover:text-white">linkedin</Link></li>
            <li><Link href={"/"} className="hover:text-white">Twitter</Link></li>
            <li><Link href={"/"} className="hover:text-white">Youtube</Link></li>
            <li><Link href={"/"} className="hover:text-white">Github</Link></li>

        </ul>
      </div>
      <div className="md:w-1/4 mb-[20px]">
        <h1 className="text-white text-5xl font-bold border-l-blue-600 border-l-[6px] pl-[10px] shine">Contact Us</h1>
        <ul className="text-gray-400 pt-[30px]">
            <li><Link href={"/"} className="hover:text-white">+92123456789</Link></li>
            <li><Link href={"/"} className="hover:text-white">abc@gmail.com</Link></li>
            <li><Link href={"/"} className="hover:text-white">Karachi</Link></li>
            <li><Link href={"/"} className="hover:text-white">Pakistan</Link></li>

        </ul>
      </div>
    </div>
    <div className="bg-gray-200 text-gray-500 md:flex justify-between px-[50px] py-[10px] text-center">
        <p >All Rights Reserved © | <br className="md:hidden"/><Link href="https://github.com/Adeelkhalid147" target="_blank" className="hover:text-black" > Adeel Khalid Ansari</Link></p>
        <div>
            <Link href={"/"}>Legals </Link>|
            <Link href={"/"}> Terms Of Use </Link>|
            <Link href={"/"}> Privacy Policy</Link>
        </div>
    </div>
          </>
  );
}
