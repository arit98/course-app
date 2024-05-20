import React from "react";
import Eye from "../../assets/eye.svg";
import "./style.css";

const Content = () => {
  return (
    <div className="content-container">
      <div className="btn">
        <p>DATA SCIENCE COURSE LEARNING PATH</p>
      </div>
      <div className="btn-mob">
        <p>FULL STACK COURSE LEARNING PATH</p>
      </div>
      <div className="heading">
        <p>
          Data Science <span>Course Curriculum</span>
        </p>
      </div>
      <div className="heading-mob">
        <p>
        Full Stack Developer <span>Course Curriculum</span>
        </p>
      </div>
      <div className="box">
        <div className="box-content">
          <div className="box-element">
            <p>C++</p>
            <p>Learn C++ for strong programming fundamentals.</p>
          </div>
          <div className="box-btn">
            <img height={14} src={Eye} alt="" />
            <p>View Curriculum</p>
          </div>
        </div>
        <div className="box-content">
          <div className="box-element">
            <p>MERN Stack</p>
            <p>Master the MERN stack for high-demand projects.</p>
          </div>
          <div className="box-btn">
            <img height={14} src={Eye} alt="" />
            <p>View Curriculum</p>
          </div>
        </div>
        <div className="box-content">
          <div className="box-element">
            <p>Data Structure & Algorithm</p>
            <p>Excel in Data Structures and Algorithms for interview success.</p>
          </div>
          <div className="box-btn">
            <img height={14} src={Eye} alt="" />
            <p>View Curriculum</p>
          </div>
        </div>
        <div className="box-content">
          <div className="box-element">
            <p>Competitve Programming</p>
            <p>Excel in Data Structures and Algorithms for interview success.</p>
          </div>
          <div className="box-btn">
            <img height={14} src={Eye} alt="" />
            <p>View Curriculum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
