import React, { useContext } from "react";
import ProgramImg from "../../assets/prog-horizontal.svg";
import ProgramVImg from "../../assets/project-v.svg"
import "./style.css";
import { AuthContext } from "../../context/AuthContext";

const Program = () => {
  const {setSignInOpen} = useContext(AuthContext)
  return (
    <section className="prog">
      <p>How does the Internship Program works ?</p>
      <div className="img">
        <img height={180} src={ProgramImg} alt="" />
      </div>
      <div className="img-mob">
        <img height={300} src={ProgramVImg} alt="" />
      </div>
      <div onClick={()=>setSignInOpen(true)} className="btn">Apply now for ₹ 2999</div>
    </section>
  );
};

export default Program;
