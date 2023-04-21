import React from "react";
import "./index.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import leftArrow from "../../assets/rightArrow.png";

// import { motion } from "framer-motion";
// import { fadeIn } from "../../utils/motion";
// const transition = {
//   type: "spring",

//   duration: 1,
// };

// const mobile = window.innerWidth <= 768 ? true : false;

// const dur = mobile ? 3 : 1;

const Plans = () => {
  return (
    <div id="plans" className="plans-main">
      <div className="programs-header">
        <span className="stroke-text">Ready to start</span>
        <span>Your Journy</span>
        <span className="stroke-text">now with us...!</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div
            // initial={{ opacity: 0, x: -100 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: 100 }}
            // transition={{ ...transition, duration: dur }}
            // variants={fadeIn("up", "tween", 0.5, 0.6)}
            className="plan"
            key={i}
          >
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div className="arrow-container">
              <span>See more benefit</span>
              <img src={leftArrow} alt="" />
            </div>
            <button>Join In</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
