import React, { useState } from "react";
import TimeWait from "../../assets/time-wait.svg";
import ScribbleFinal from "../../assets/scribble-final.svg";
import Step from "../../assets/step.svg";
import Img1 from "../../assets/step1-img.svg";
import Img2 from "../../assets/complete.svg";
import Img3 from "../../assets/receive.svg";
import "./style.css";

const Main = () => {
  const totalSeats = 20;
  const [seatsLeft, setSeatsLeft] = useState(totalSeats);

  const handleRangeChange = (event) => {
    const selectedSeats = totalSeats - event.target.value;
    setSeatsLeft(selectedSeats);
  };

  return (
    <section className="main-content">
      <div className="offer">
        <div className="heading">
          <p>
            Don't miss out on this <span>limited-time opportunity</span> to
            learn for <span>Free!</span>
          </p>
        </div>
        <div className="box">
          <p>100% Refund Offer 😎</p>
          <div className="group">
            <p>{seatsLeft} Seats Left</p>
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
            <p>Offer ends in 10:00 Mins</p>
          </div>
          <div className="scribble">
            <img src={ScribbleFinal} alt="" />
          </div>
        </div>

        <h2>How does it work?</h2>
        <div className="row">
          <div className="row-item">
            <div className="row-arrow">
              <img height={30} src={Step} alt="" />
              <p>Step 1</p>
            </div>
            <div className="row-box">
              <p>Step 1: Enroll into your favorite course</p>
              <div className="img-box">
                <img height={74} src={Img1} alt="" />
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
          {[1, 2, 3, 4, 5].map((_) => (
            <div className="box">
              <p>Logo</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
