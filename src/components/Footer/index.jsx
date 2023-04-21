import React from "react";
import { BsFacebook, BsCcCircle } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillInstagram,
} from "react-icons/ai";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <BsFacebook />
        <AiFillTwitterCircle />
        <AiFillGoogleCircle />
        <AiFillInstagram />
      </div>
      <div>
        <BsCcCircle />
        2023 Copyright Brihas
      </div>
    </div>
  );
};

export default Footer;
