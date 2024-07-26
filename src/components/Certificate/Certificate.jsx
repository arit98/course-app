import React from "react";
import CertificateImg from "../../assets/certificate.svg";
import star from "../../assets/star1.svg";
import Charecter from "../../assets/charecter.svg";

const Certificate = () => {
  return (
    <section className="w-4/5 flex flex-col items-center gap-5 md:w-7/10 lg:w-4/5">
      <p className="text-xl font-bold text-gray-600 mb-5 md:text-2xl lg:text-3xl">
        Unlock <span className="text-purple-800">6 Certificates</span> &{" "}
        <span className="text-purple-800">Internship Opportunities!</span>
      </p>
      <div className="flex flex-col w-full gap-5 md:flex-row">
        <div className="w-full p-4 bg-purple-100 flex flex-col items-center justify-center rounded-xl md:w-1/2">
          <p className="text-lg font-semibold text-purple-900">Get 6 Industry Recognized Certificates</p>
          <div className="hidden md:block">
            <img
              height={445}
              src={CertificateImg}
              style={{
                marginTop: "-80px",
                marginBottom: "-80px",
              }}
              alt="Certificate"
            />
          </div>
          <div className="block md:hidden w-full h-full">
            <img
              src={CertificateImg}
              style={{
                width: "100%",
                height: "100%",
                marginTop: "-50px",
                marginBottom: "-30px",
              }}
              alt="Certificate"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="flex items-center gap-1 bg-purple-200 px-3 py-1.5 rounded-full text-purple-800 font-medium">
              <img height={17} src={star} alt="Star" />
              <h5 className="m-0">Official and Verified</h5>
            </span>
            <span className="flex items-center gap-1 bg-purple-200 px-3 py-1.5 rounded-full text-purple-800 font-medium">
              <img height={17} src={star} alt="Star" />
              <h5 className="m-0">Enhances Credibility</h5>
            </span>
          </div>
        </div>
        <div className="w-full p-4 bg-purple-100 flex flex-col items-center justify-center rounded-xl md:w-1/2">
          <p className="text-lg font-semibold text-purple-900">Bag Internship Opportunities!</p>
          <h4 className="font-normal mb-4 md:mb-6">
            With every course, we make you not only industry-ready but also help you crack your first internship.
          </h4>
          <div className="block md:hidden">
            <img height={200} src={Charecter} alt="Character" />
          </div>
          <div className="hidden md:block">
            <img height={300} src={Charecter} alt="Character" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
