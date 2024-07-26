import React from "react";
import Eye from "../../assets/eye.svg";

const Content = () => {
  return (
    <div className="w-full bg-[#fcf5fe] flex flex-col items-center justify-center select-none">
      <div className="bg-[#f9ebfc] text-[#992e9d] p-2 w-80 rounded-full text-center cursor-pointer mt-8 lg:hidden">
        <p>DATA SCIENCE COURSE LEARNING PATH</p>
      </div>
      <div className="bg-[#f9ebfc] text-[#992e9d] p-2 w-80 rounded-full text-center cursor-pointer mt-8 hidden lg:block">
        <p>FULL STACK COURSE LEARNING PATH</p>
      </div>
      <div className="text-4xl text-center font-bold mt-6 lg:hidden">
        <p>
          Data Science <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b73bbe] to-[#ebcb2e]">Course Curriculum</span>
        </p>
      </div>
      <div className="text-4xl text-center font-bold mt-6 hidden lg:block">
        <p>
          Full Stack Developer <span className="bg-[#4c4d52] bg-clip-text text-transparent">Course Curriculum</span>
        </p>
      </div>
      <div className="mt-6 w-4/5 flex flex-col gap-12 items-center bg-white p-6 rounded-[25px] mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full border-b border-gray-200 pb-6 lg:pb-0 lg:border-none lg:mb-0">
          <div className="flex flex-col">
            <p className="text-[#4c4d52] text-xl font-semibold m-0">C++</p>
            <p className="text-[#83848d] m-0">Learn C++ for strong programming fundamentals.</p>
          </div>
          <div className="bg-[#f9ebfc] p-2 w-44 text-center rounded-full flex items-center justify-center gap-2 text-[#b73bbe] font-medium cursor-pointer">
            <img height={14} src={Eye} alt="" />
            <p>View Curriculum</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full border-b border-gray-200 pb-6 lg:pb-0 lg:border-none lg:mb-0">
          <div className="flex flex-col">
            <p className="text-[#4c4d52] text-xl font-semibold m-0">MERN Stack</p>
            <p className="text-[#83848d] m-0">Master the MERN stack for high-demand projects.</p>
          </div>
          <div className="bg-[#f9ebfc] p-2 w-44 text-center rounded-full flex items-center justify-center gap-2 text-[#b73bbe] font-medium cursor-pointer">
            <img height={14} src={Eye} alt="" />
            <p>View Curriculum</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full border-b border-gray-200 pb-6 lg:pb-0 lg:border-none lg:mb-0">
          <div className="flex flex-col">
            <p className="text-[#4c4d52] text-xl font-semibold m-0">Data Structure & Algorithm</p>
            <p className="text-[#83848d] m-0">Excel in Data Structures and Algorithms for interview success.</p>
          </div>
          <div className="bg-[#f9ebfc] p-2 w-44 text-center rounded-full flex items-center justify-center gap-2 text-[#b73bbe] font-medium cursor-pointer">
            <img height={14} src={Eye} alt="" />
            <p>View Curriculum</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="flex flex-col">
            <p className="text-[#4c4d52] text-xl font-semibold m-0">Competitive Programming</p>
            <p className="text-[#83848d] m-0">Excel in Data Structures and Algorithms for interview success.</p>
          </div>
          <div className="bg-[#f9ebfc] p-2 w-44 text-center rounded-full flex items-center justify-center gap-2 text-[#b73bbe] font-medium cursor-pointer">
            <img height={14} src={Eye} alt="" />
            <p>View Curriculum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
