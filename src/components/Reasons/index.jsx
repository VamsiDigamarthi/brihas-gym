import React from "react";
import "./index.css";

import ng from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

import girls_2 from "../../assets/girls-2.jpg";
//import girls_3 from "../../assets/new-5.jpg";
import new_gym_card from "../../assets/new-gym-card.jpg";
import new_gym_card_2 from "../../assets/new-gym-card-2.jpg";
import new_gym_card_3 from "../../assets/new-gym-card-3.jpg";
import { motion } from "framer-motion";

const Reasons = () => {
  const transition = { type: "spring", duration: 1 };

  const mobile = window.innerWidth <= 768 ? true : false;
  const desk = mobile && "hidden";
  const mobile_view = mobile ? "show" : "hidden";
  return (
    <div className="reasons" id="reasons">
      <div className={`${mobile_view}`}>
        <span className="stroke-text">Why </span>
        <span>choose us?</span>
      </div>
      <div className="left-r">
        <img src={girls_2} alt="1" />
        <img src={new_gym_card} alt="2" />
        <img src={new_gym_card_3} alt="3" />
        <img src={new_gym_card_2} alt="4" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div className={`${desk}`}>
          <span className="stroke-text">Why </span>
          <span className="mobile">choose us?</span>
        </div>
        <div className="details-r">
          <motion.div
            initial={{ x: mobile ? "60px" : "20rem" }}
            whileInView={{ x: "0rem" }}
            transition={transition}
          >
            <img src={tick} alt="" />
            <span>OVER 100+ EXPERT COACHS</span>
          </motion.div>
          <motion.div
            initial={{ x: mobile ? "60px" : "20rem" }}
            whileInView={{ x: "0rem" }}
            transition={{ ...transition, duration: 2 }}
          >
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </motion.div>
          <motion.div
            initial={{ x: mobile ? "60px" : "20rem" }}
            whileInView={{ x: "0rem" }}
            transition={{ ...transition, duration: 3 }}
          >
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </motion.div>
          <motion.div
            initial={{ x: mobile ? "60px" : "20rem" }}
            whileInView={{ x: "0rem" }}
            transition={{ ...transition, duration: 4 }}
          >
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </motion.div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="partners"
        >
          <img src={ng} alt="s" />
          <img src={adidas} alt="s" />
          <img src={nike} alt="s" />
        </motion.div>
      </div>
    </div>
  );
};

export default Reasons;
