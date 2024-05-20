import React from "react";
import CertificateImg from "../../assets/certificate.svg";
import star from "../../assets/star1.svg";
import Charecter from "../../assets/charecter.svg";
import "./style.css";

const Certificate = () => {
  return (
    <section className="cert">
      <p>
        Unlock <span>6 Certificates</span> &{" "}
        <span>Internship Opportunities!</span>
      </p>
      <div className="box-group">
        <div className="box">
          <p>Get 6 Industry Recognized Certificates</p>
          <div className="box-img1">
            <img
              src={CertificateImg}
              style={{
                width: "100%",
                height: "100%",
                marginTop: "-130px",
                marginBottom: "-80px",
              }}
              alt=""
            />
          </div>
          <div className="box-img-mob">
            <img
              src={CertificateImg}
              style={{
                width: "100%",
                height: "100%",
                marginTop: "-50px",
                marginBottom: "-30px",
              }}
              alt=""
            />
          </div>
          <div>
            <div className="group-btn">
              <span className="violet-btn">
                <img height={17} src={star} alt="" />
                <h5>Official and Verified</h5>
              </span>
              <span className="violet-btn">
                <img height={17} src={star} alt="" />
                <h5>Enhances Credibility</h5>
              </span>
            </div>
          </div>
        </div>
        <div className="box1">
          <p>Bag Internship Opportunities!</p>
          <h4>
            With every course, we make you not only industry-ready but also help
            you crack your first internship.
          </h4>
          <div className="box-img-mob">
          <img height={250} src={Charecter} alt="" />
          </div>
          <div className="box-img1">
          <img height={300} src={Charecter} alt="" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
