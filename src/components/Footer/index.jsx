import React from "react";
import { FooterComponent } from "./styles";
import { BiUserCircle, BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterComponent>
      <Link to="/addExpense">
        <BiMinusCircle size="48px" color="#CE2E49" />
      </Link>
      <Link to="/abmClients/add">
        <BiUserCircle size="48px" color="black" />
      </Link>
      <Link to="/addRevenue">
        <BiPlusCircle size="48px" color="#219F21" />
      </Link>
    </FooterComponent>
  );
}

export default Footer;
