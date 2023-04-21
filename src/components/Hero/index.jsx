import React from "react";
import "./index.css";
import Header from "../Header";
import body from "../../assets/new-girl.png";
// import body-1 from "../../assets/new-girl-4.png";
// import body_2 from "../../assets/new-66.png";
// import body_3 from "../../assets/new-88.png";
// import body_4 from "../../assets/new-11.png";
// import body_5 from "../../assets/gym-girl.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Colleris from "../../assets/calories.png";
import Heart from "../../assets/heart.png";

import { motion } from "framer-motion";

import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div id="hero" className="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* best-add-start */}
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "148px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* best add end */}
        <div className="hero-text">
          <div>
            <span className="stroke-text d">SHAPE </span>
            <span>Your</span>
          </div>
          <div>
            <span className="d">Ideal</span>
            <span className="stroke-text">Body</span>
          </div>
          <div>
            <span>
              Just believe in yourself. Even if you don’t, just pretend that you
              do and at some point, you will.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={10} start={0} delay="2" preFix="+" />
            </span>
            <span>export cochies</span>
          </div>
          <div>
            <span>
              <NumberCounter end={80} start={30} delay="1" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={40} start={10} delay="2" preFix="+" />
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "5rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="heart" />
          <span>Heart rate</span>
          <span>122 bpm</span>
        </motion.div>
        <img src={body} alt="hero-images" className="hero-image" />
        <motion.img
          initial={{ right: mobile ? "-10rem" : "11rem" }}
          whileInView={{ right: mobile ? "6.5rem" : "21rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero-images-backs"
          className="hero-image-back"
        />
        <motion.div
          initial={{ right: mobile ? "5rem" : "46rem" }}
          whileInView={{ right: mobile ? "2rem" : "39rem" }}
          transition={transition}
          className="callaries"
        >
          <img src={Colleris} alt="kcla" />
          <div>
            <span>Calaries Burn</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
