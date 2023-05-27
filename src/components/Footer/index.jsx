import React from "react";
import { FooterComponent } from "./styles";
import { BiUserCircle, BiBookAlt } from "react-icons/bi";

function Footer() {
  return (
    <FooterComponent>
      <BiUserCircle size="48px" color="#E0FBFC" />
      <BiBookAlt size="48px" color="#E0FBFC" />
    </FooterComponent>
  );
}

export default Footer;
