import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import { Link } from "react-router-dom";
import { Title, AbmContainer } from "./style";
function ClientsAbm() {
  return (
    <AbmContainer>
      <Spacer width="300px" height="150px" />
      <Title> abm clientes</Title>
      <Spacer width="300px" height="50px" />
      <Link to="/abmClients/add" className="link">
        <Button text="Cargar Clientes" color="#C2DFE3" />
      </Link>
      <Spacer width="300px" height="50px" />
      <Link to="/abmClients/edit" className="link">
        <Button text="Editar Cliente" color="#C2DFE3" />
      </Link>
      <Spacer width="300px" height="50px" />
      <Button text="Dar de Baja Cliente" color="#C2DFE3" />
    </AbmContainer>
  );
}

export default ClientsAbm;
