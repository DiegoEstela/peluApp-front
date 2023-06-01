import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import { Link } from "react-router-dom";
import { Title, AbmContainer } from "./style";
import ButtonClosed from "../../components/ButtonClosed";
function ServicesAbm() {
  return (
    <AbmContainer>
      <ButtonClosed />
      <Title> Menu Servicios</Title>
      <Spacer width="300px" height="8%" />
      <Link to="/abmServices/add" className="link">
        <Button text="Nuevo Servicio" color="#C2DFE3" />
      </Link>
      <Spacer width="300px" height="8%" />
      <Button text="Editar Servicio" color="#C2DFE3" />
      <Spacer width="300px" height="8%" />
      <Button text="Eliminar Servicio" color="#C2DFE3" />
    </AbmContainer>
  );
}

export default ServicesAbm;
