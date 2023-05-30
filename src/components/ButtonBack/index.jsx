import { ButtonContainer } from "./styles";
import { BiCaretLeftCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

import React from "react";

function ButtonBack({ ubication }) {
  return (
    <ButtonContainer>
      <Link to={`/${ubication}`}>
        <BiCaretLeftCircle size="50px" color="#5C6B73" />
      </Link>
    </ButtonContainer>
  );
}

export default ButtonBack;
