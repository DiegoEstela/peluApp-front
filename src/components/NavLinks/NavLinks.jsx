import { NavContainer, BgDiv } from "./styles";

function NavLinks({ active }) {
  return (
    <NavContainer>
      <div className={`links ${active ? "active" : ""}`}>
        <a> Clientes </a>
        <a> Productos </a>
        <a> Servicios </a>
      </div>
      <BgDiv className={`initial ${active ? "active" : ""}`}> </BgDiv>
    </NavContainer>
  );
}

export default NavLinks;
