import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { Row, Container, NavPc } from "./styles";
import { Link } from "react-router-dom";
import BurgetButton from "../BurgerButton/BurgetButton";
import NavLinks from "../NavLinks/NavLinks";

export default function Header() {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <Container>
      <Row>
        <Link to="/">
          <AiFillHome size="48px" color="black" />
        </Link>
        <BurgetButton active={activeNav} setActive={setActiveNav} />
        <NavPc>
          <NavLinks active={activeNav} setActive={setActiveNav} />
        </NavPc>
      </Row>
      <NavLinks active={activeNav} setActive={setActiveNav} />
    </Container>
  );
}
