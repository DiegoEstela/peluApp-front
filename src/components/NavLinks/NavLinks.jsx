import { NavContainer, BgDiv } from "./styles";
import { Link } from "react-router-dom";

function NavLinks({ active, setActive }) {
  return (
    <NavContainer>
      <div className={`links ${active ? "active" : ""}`}>
        <Link
          to="/ambClients"
          onClick={() => {
            setActive(!active);
          }}
        >
          {" "}
          Clientes{" "}
        </Link>
        <Link
          to="/products"
          onClick={() => {
            setActive(!active);
          }}
        >
          {" "}
          Productos{" "}
        </Link>
        <Link
          to="/services"
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
