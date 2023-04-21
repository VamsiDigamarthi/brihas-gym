import React from "react";
import "./index.css";

import rightArrow from "../../assets/rightArrow.png";

import { programsData } from "../../data/programsData";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
const Programs = () => {
  // const transition = {
  //   type: "spring",

  //   duration: 1,
  // };

  return (
    <div id="programs" className="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            className="category"
          >
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={rightArrow} alt="arrrow" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
