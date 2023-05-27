import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import { Title } from "./style";
function ClientsAbm() {
  return (
    <>
      <Title> abm clientes</Title>
      <Spacer width="300px" height="50px" />
      <Button text="Agregar Cliente" color="#C2DFE3" />
      <Spacer width="300px" height="50px" />
      <Button text="Editar Cliente" color="#C2DFE3" />
      <Spacer width="300px" height="50px" />
      <Button text="Dar de Baja Cliente" color="#C2DFE3" />
    </>
  );
}

export default ClientsAbm;
