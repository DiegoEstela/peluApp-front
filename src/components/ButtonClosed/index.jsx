import { ButtonContainer } from "./styles";
import { BiCaretLeftCircle } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import React from "react";

function ButtonClosed() {
  const navigate = useNavigate();
  return (
    <ButtonContainer>
      <BiCaretLeftCircle
        size="50px"
        color="#5C6B73"
        onClick={() => navigate(-1)}
      />
    </ButtonContainer>
  );
}

export default ButtonClosed;
