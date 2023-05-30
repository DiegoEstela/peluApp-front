import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import { Link } from "react-router-dom";
import { Title, AbmContainer } from "./style";
import ButtonClosed from "../../components/ButtonClosed";
function ClientsAbm() {
  return (
    <AbmContainer>
      <ButtonClosed />
      <Title> Menu Clientes</Title>
      <Spacer width="10px" height="50px" />
      <Link to="/abmClients/add" className="link">
        <Button text="Nuevo Cliente" color="#C2DFE3" />
      </Link>
      <Spacer width="10px" height="50px" />
      <Link to="/abmClients/edit" className="link">
        <Button text="Editar Cliente" color="#C2DFE3" />
      </Link>
      <Spacer width="10px" height="50px" />
      <Button text="Eliminar Cliente" color="#C2DFE3" />
    </AbmContainer>
  );
}

export default ClientsAbm;
