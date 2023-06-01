import { ButtonContainer } from "./styles";
import { BiXCircle } from "react-icons/bi";

import React from "react";
import { Link } from "react-router-dom";

function ButtonClosed() {
  return (
    <ButtonContainer>
      <Link to="/">
        <BiXCircle size="42px" color="#5C6B73" />
      </Link>
    </ButtonContainer>
  );
}

export default ButtonClosed;
