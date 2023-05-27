import React from "react";
import { FooterComponent } from "./styles";
import { BiUserCircle, BiBookAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterComponent>
      <Link to="/clients">
        <BiUserCircle size="48px" color="black" />
      </Link>

      <BiBookAlt size="48px" color="black" />
    </FooterComponent>
  );
}

export default Footer;
