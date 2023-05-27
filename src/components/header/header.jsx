import React, { useState } from "react";
import { RiScissorsFill } from "react-icons/ri";
import { Row, Container } from "./styles";
import { Link } from "react-router-dom";
import BurgetButton from "../BurgerButton/BurgetButton";
import NavLinks from "../NavLinks/NavLinks";

export default function Header() {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <Container>
      <Row>
        <Link to="/">
          <RiScissorsFill size="48px" color="#5C6B73" />
        </Link>
        <BurgetButton active={activeNav} setActive={setActiveNav} />
      </Row>
      <NavLinks active={activeNav} setActive={setActiveNav} />
    </Container>
  );
}
