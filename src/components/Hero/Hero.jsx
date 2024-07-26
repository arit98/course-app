import React, { useContext } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiQuestionLine } from "react-icons/ri";
import Graduated from "../../assets/graduated.svg";
import Learning from "../../assets/outline-learning.svg";
import Doubt from "../../assets/doubt.svg";
import Projects from "../../assets/projects.svg";
import star from "../../assets/star.svg";
import { AuthContext } from "../../context/AuthContext";

const Hero = () => {
  const {setSignInOpen} = useContext(AuthContext);
  return (
    <main className="w-full select-none">
      <section className="flex flex-col w-4/5 pt-28 mx-auto">
        <div className="flex items-center gap-3 rounded-lg border border-orange-500 p-2 w-64">
          <GiGraduateCap />
          <p>An IIT Delhi Alumni Initiative</p>
        </div>
        <div className="md:w-[60%] w-full mt-8">
          <p className="md:text-6xl text-4xl font-bold text-gray-700">
            Become an Expert in the field of{" "}
            <span className="bg-gradient-to-b from-[#B73BBE]/[0.7] to-[#992E9D] inline-block text-transparent bg-clip-text">Data Science with 6 courses</span>
          </p>
        </div>
        <div className="mt-2">
          <p>
            A specially crafted Tech Kickstarter, with 5+ extensive online
            courses.
          </p>
          <div className="flex flex-wrap w-full gap-4 mt-8 text-base">
            <span className="flex items-center gap-1 bg-yellow-100 px-4 md:py-2 py-1 rounded-full text-orange-600 font-medium">
              <img className="md:flex hidden" height={17} src={star} alt="" />
              <p>Personal Mentorship</p>
            </span>
            <span className="flex items-center gap-1 bg-yellow-100 px-4 md:py-2 py-1 rounded-full text-orange-600 font-medium">
              <img className="md:flex hidden" height={17} src={star} alt="" />
              <p>Internship Assistance</p>
            </span>
            <span className="flex items-center gap-1 bg-yellow-100 px-4 md:py-2 py-1 rounded-full text-orange-600 font-medium">
              <img className="md:flex hidden" height={17} src={star} alt="" />
              <p>Industry Certified Courses</p>
            </span>
          </div>
          <div className="flex items-center w-full md:flex-row flex-col gap-4 mt-8">
            <div onClick={()=>setSignInOpen(true)} className="flex h-12 md:w-auto w-full items-center justify-center gap-1.5 bg-gradient-to-b from-[#B73BBE] to-[#992E9D] p-6 rounded-xl text-white cursor-pointer">
              <p>Enroll Now</p>
              <FaRegPaperPlane />
            </div>
            <div onClick={()=>setSignInOpen(true)} className="flex items-center justify-center p-6 text-[#992E9D] font-bold gap-1 cursor-pointer">
              <p>Know More</p>
              <RiQuestionLine />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:flex mt-16 w-full h-36 bg-pink-50 items-center justify-between">
        <div className="flex items-center justify-center gap-4 w-1/4 pr-4 border-r border-pink-200">
          <img src={Learning} className="text-purple-700" />
          <div className="flex flex-col text-gray-600">
            <p className="text-2xl font-semibold text-purple-700">24</p>
            <p className="text-xl">Courses</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 w-1/4 pr-4 border-r border-pink-200">
          <img src={Graduated} className="text-purple-700" />
          <div className="flex flex-col text-gray-600">
            <p className="text-2xl font-semibold text-purple-700">30k+</p>
            <p className="text-xl">Learners</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 w-1/4 pr-4 border-r border-pink-200">
          <img src={Doubt} className="text-purple-700" />
          <div className="flex flex-col text-gray-600">
            <p className="text-2xl font-semibold text-purple-700">100k+</p>
            <p className="text-xl">Doubts Solved</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 w-1/4">
          <img src={Projects} className="text-purple-700" />
          <div className="flex flex-col text-gray-600">
            <p className="text-2xl font-semibold text-purple-700">10k+</p>
            <p className="text-xl">Students Projects</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
