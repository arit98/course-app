import React from "react";
import "./style.css";
import { GiGraduateCap } from "react-icons/gi";
import { TiStarburstOutline } from "react-icons/ti";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiQuestionLine } from "react-icons/ri";
import { IoMdLaptop } from "react-icons/io";
import Graduated from "../../assets/graduated.svg";
import Learning from "../../assets/outline-learning.svg";
import Doubt from "../../assets/doubt.svg";
import Projects from "../../assets/projects.svg";
import star from "../../assets/star.svg";

const Hero = () => {
  return (
    <>
      <main className="wrapper">
        <section className="hero-container">
          <div className="hero-border">
            <GiGraduateCap />
            <p>An IIT Delhi Alumni Initiative</p>
          </div>
          {/* heroText */}
          <div className="herotext">
            <p>
              Become an Expert in the field of{" "}
              <span>Data Science with 6 courses!</span>
            </p>
          </div>
          {/* spacialy crafted */}
          <div className="text-btn">
            <p>
              A specially crafted Tech Kickstarter, with 5+ extensive online
              courses.
            </p>
            <div className="group-btn">
              <span className="gold-btn">
                <img height={17} src={star} alt="" />
                <p>Personal Mentoship</p>
              </span>
              <span className="gold-btn">
                <img height={17} src={star} alt="" />
                <p>Internship Assistance</p>
              </span>
              <span className="gold-btn">
                <img height={17} src={star} alt="" />
                <p>Industry Certified Courses</p>
              </span>
            </div>
            <div className="group-btn">
              <div className="enroll-btn">
                <p>Enroll Now</p>
                <FaRegPaperPlane />
              </div>
              <div className="more-btn">
                <p>Know More</p>
                <RiQuestionLine />
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
        <section className="footer">
          <div className="img">
            <img src={Learning} className="icon" />
            <div className="img-text">
              <p>24</p>
              <p>Courses</p>
            </div>
          </div>
          <div className="img">
            <img src={Graduated} className="icon" />
            <div className="img-text">
              <p>30k+</p>
              <p>Learners</p>
            </div>
          </div>
          <div className="img">
            <img src={Doubt} className="icon" />
            <div className="img-text">
              <p>100k+</p>
              <p>Doubts Solved</p>
            </div>
          </div>
          <div className="img">
            <img src={Projects} className="icon" />
            <div className="img-text">
              <p>10k+</p>
              <p>Students Projects</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
