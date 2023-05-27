import React, { useState } from "react";
import { RiScissorsFill } from "react-icons/ri";
import { Row, Container } from "./styles";
import BurgetButton from "../BurgerButton/BurgetButton";
import NavLinks from "../NavLinks/NavLinks";

export default function Header() {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <Container>
      <Row>
        <RiScissorsFill size="48px" color="#5C6B73" />
        <BurgetButton active={activeNav} setActive={setActiveNav} />
      </Row>
      <NavLinks active={activeNav} setActive={setActiveNav} />
    </Container>
  );
}
