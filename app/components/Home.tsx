import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";


export default function Home() {
  return (
    <>
      {/* section 1 */}
      {/* rounded-b-[30%] as mai b ka mtlb bottom h mtlb neche se rounded krna h */}
      <div className="bg-[url('/home.jpg')] bg-cover bg-fixed text-center md:px-40 py-40  rounded-b-[30%]">
        <p className="text-xl font-semibold text-black">
          Earn as you Learn Program
        </p>
        <h1 className="text-black font-bold md:text-4xl text-xl mt-3">
          Prepare yourself for the Next Generation of Internet with Panaverse
        </h1>
        <p className="mt-5 text-xl px-3">
          One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
          3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient
          Computing/IoT Technologies
        </p>
        <button className="bg-blue-400 px-6 py-2 mt-6 text-white rounded-xl text-xl font-semibold hover:bg-blue-600">
          More Info
        </button>
      </div>

      {/* section 1 end */}

      {/* section 2 */}
      <div className="flex flex-col md:flex-row bg-slate-400 m-auto -mt-[90px] rounded-full shadow-2xl justify-around w-[60%] mb-4  md:py-[60px] py-[30px] space-y-10 items-center ">
        <Image
          src="/logo-text_dao.png"
          alt="panaverce dao"
          width={200}
          height={200}
        />
        <Image
          src="/pana2.svg"
          alt="pana"
          width={200}
          height={200}
          className="pb-10"
        />
        <Image
          src="/saylaniLogo.webp"
          alt="saylani"
          width={200}
          height={200}
          className="pb-10"
        />
      </div>

      {/* section 2 end */}

      {/* section 3 */}
      <div className="flex md:flex-row flex-col m-auto mt-8">
        <div className="md:w-[50%] px-24 pt-10 ">
          <Image src="/technology.jpg" alt="tech" height={400} width={500} />
        </div>
        <div className="md:w-[50%] pt-10 px-10">
          <h2 className="text-2xl md:text-5xl  font-bold border-l-[6px] border-l-blue-400 pl-3">
            Program Of Studies
          </h2>
          <p className="text-md md:text-xl mt-3">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. It is going to be a
            fifteen-month-long hybrid program that includes both onsite and
            online classes and is divided into five quarters of 13 weeks each.
            The emphasis will be on hands-on learning by educating students to
            produce projects.
          </p>
          <button className="bg-blue-400 px-3 md:px-6 py-1 md:py-2 mt-6 text-white rounded-xl text-xl font-semibold hover:bg-blue-600">
            Read More
          </button>
        </div>
      </div>
      {/* section 3 end */}

      {/* section 4 Boot camp */}
      <div className="flex flex-col md:flex-row p-10">
        <div className="bg-[url('/studayy.jpg')] bg-cover bg-center m-2 rounded-lg h-[11cm] md:w-[50%]"></div>

        <div className=" pt-10 md:w-[50%] m-2 rounded-lg bg-slate-400 p-20">
          <h2 className="text-2xl md:text-5xl font-bold border-l-[6px] border-l-blue-400 pl-3">
            Bootcamp 2023
          </h2>
          <p className="text-md md:text-xl mt-3">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. It is going to be a
            fifteen-month-long hybrid program that includes both onsite and
            online classes and is divided into five quarters of 13 weeks each.
            The emphasis will be on hands-on learning by educating students to
            produce projects.
          </p>
          <button className="bg-blue-400 px-6 py-2 mt-6 text-white rounded-xl text-xl font-semibold hover:bg-blue-600">
            Read More
          </button>
        </div>
      </div>
      {/* section 4 boot camp end */}
    </>
  );
}
