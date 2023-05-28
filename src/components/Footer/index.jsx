import React from "react";
import { FooterComponent } from "./styles";
import { BiUserCircle, BiCut, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterComponent>
      <Link to="/clients">
        <BiUserCircle size="48px" color="black" />
      </Link>
      <Link to="/addRevenue">
        <span>
          <BiCut size="48px" color="black" />
          <BiPlus size="30px" color="black" />
        </span>
      </Link>
    </FooterComponent>
  );
}

export default Footer;
