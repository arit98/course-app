import React, { useContext, useState } from "react";
import TimeWait from "../../assets/time-wait.svg";
import ScribbleFinal from "../../assets/scribble-final.svg";
import Step from "../../assets/step.svg";
import Step1 from "../../assets/step-v.svg";
import Img1 from "../../assets/step1-img.svg";
import Img2 from "../../assets/complete.svg";
import Img3 from "../../assets/receive.svg";
import "./style.css";
import { AuthContext } from "../../context/AuthContext";

const Main = () => {
  const totalSeats = 20;
  const [seatsLeft, setSeatsLeft] = useState(totalSeats);
  const {isLoggedIn} = useContext(AuthContext)

  const handleRangeChange = (event) => {
    const selectedSeats = totalSeats - event.target.value;
    setSeatsLeft(selectedSeats);
  };

  const logoUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/2560px-Capgemini_201x_logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOev-NyWHSnM89sc6SV5AqCEvLp3OYaMuBw&s",
    "https://netclan.com/assets/images/logo1.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
  ];

  return (
    <section className="main-content">
      <div className="offer">
         <div className="heading">
          <p>
            Don't miss out on this <span className="bg-gradient-to-r from-[#b73bbe] to-[#992e9d] text-transparent bg-clip-text">limited-time opportunity</span> to
            learn for <span className="bg-gradient-to-r from-[#b73bbe] to-[#992e9d] text-transparent bg-clip-text">Free!</span>
          </p>
        </div>
        <div className="box">
          <p className="text-xl text-white m-0">100% Refund Offer 😎</p>
          <div className="group">
            <p className="m-[5px 0] text-[14px] text-white">{seatsLeft} Seats Left</p>
            <input
              type="range"
              min="0"
              max={totalSeats}
              value={totalSeats - seatsLeft}
              onChange={handleRangeChange}
            />
          </div>
          <div className="text-box">
            <img height={20} src={TimeWait} alt="" />
            <p className="text-white text-[16px]">Offer ends in 10:00 Mins</p>
          </div>
          <div className="scribble">
            <img src={ScribbleFinal} alt="" />
          </div>
        </div>

        {isLoggedIn && <div className="md:w-[25rem] w-[80%] h-full py-10 flex items-center justify-center">
        <input
            required
              placeholder="Enter your coupon code"
              title="Input title"
              name="input-name"
              type="text"
              id="password_field"
              className="w-full h-10 pl-4 rounded-l-xl border border-[#e5e5e5] shadow-sm transition-all duration-300 outline-none bg-transparent"
            />
            <button className="px-4 py-2 rounded-r-xl bg-gradient-to-b from-[#b73bbe] to-[#992E9D] text-gray-100 hover:text-white shadow-md">Apply</button>
        </div>}

        <h2 className="mt-2">How does it work?</h2>
        <div className="row"> 
          {/* arrow */}
          <div className="row-item">
            <div className="row-arrow">
              <img height={30} src={Step} alt="" />
              <p>Step 1</p>
            </div>
            <div className="row-arrow-mob">
              <img height={30} src={Step1} alt="" />
              <p>1</p>
            </div>
            <div className="row-box">
              <p>Step 1: Enroll into your favorite course</p>
              <div className="img-box">
                <img height={95} src={Img1} alt="" />
              </div>
              <div className="img-box-mob">
                <img height={54} src={Img1} alt="" />
              </div>
              <h3>Start Learning with Lifetime Course Access.</h3>
            </div>
          </div>
          <div className="row-item">
            <div className="row-arrow">
              <img height={30} src={Step} alt="" />
              <p>Step 2</p>
            </div>
            <div className="row-arrow-mob">
              <img height={30} src={Step1} alt="" />
              <p>2</p>
            </div>
            <div className="row-box">
              <p>Step 2: Complete Course & Assignments within 2 Years!</p>
              <div className="img-box">
                <img height={60} src={Img2} alt="" />
              </div>
              <div className="img-box-mob">
                <img height={44} src={Img2} alt="" />
              </div>
              <h3>Finish the course within 2 Years to Qualify for Refund.</h3>
            </div>
          </div>
          <div className="row-item">
            <div className="row-arrow">
              <img height={30} src={Step} alt="" />
              <p>Step 3</p>
            </div>
            <div className="row-arrow-mob">
              <img height={30} src={Step1} alt="" />
              <p>3</p>
            </div>
            <div className="row-box">
              <p>Step 3: Receive 100% Refund upon completion</p>
              <div className="img-box">
                <img height={60} src={Img3} alt="" />
              </div>
              <div className="img-box-mob">
                <img height={44} src={Img3} alt="" />
              </div>
              <h3>
                Upon Course Completion within 2 Years, Get Your ₹1,499 Back.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <p>
          Top Companies Hiring <span>Data Scientist</span>
        </p>
        <div className="box-row">
          {logoUrls.map((url, index) => (
            <div key={index} className="box">
              <img className="p-8" src={url} alt={`Company Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
