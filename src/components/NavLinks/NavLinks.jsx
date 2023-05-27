import { NavContainer, BgDiv } from "./styles";
import { Link } from "react-router-dom";

function NavLinks({ active, setActive }) {
  return (
    <NavContainer>
      <div className={`links ${active ? "active" : ""}`}>
        <Link
          to="/abmClients"
          onClick={() => {
            setActive(!active);
          }}
        >
          {" "}
          Clientes{" "}
        </Link>
        <Link
          to="/abmProducts"
          onClick={() => {
            setActive(!active);
          }}
        >
          {" "}
          Productos{" "}
        </Link>
        <Link
          to="/abmServices"
          onClick={() => {
            setActive(!active);
          }}
        >
          {" "}
          Servicios{" "}
        </Link>
      </div>
      <BgDiv className={`initial ${active ? "active" : ""}`}> </BgDiv>
    </NavContainer>
  );
}

export default NavLinks;
