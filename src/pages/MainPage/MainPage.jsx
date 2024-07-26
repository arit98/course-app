import React from "react";
import Hero from "../../components/Hero/Hero";
import Content from "../../components/Content/Content";
import Main from "../../components/Main/Main";
import Certificate from "../../components/Certificate/Certificate";
import Program from "../../components/Program/Program";

const Overview = ({section1Ref, section2Ref, section3Ref, section4Ref}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full" ref={section1Ref}>
      <div className="h-40" />
        <Hero />
      </div>
      <div className="w-full" ref={section2Ref}>
      <div className="h-40" />
        <Content />
      </div>
      <div className="w-full" ref={section3Ref}>
      <div className="h-40" />
        <Main />
      </div>
      <div className="w-full flex items-center justify-center flex-col" ref={section4Ref}>
      <div className="h-40" />
        <Certificate />
        <div className="h-20" />
        <Program />
      </div>
    </div>
  );
};

export default Overview;
