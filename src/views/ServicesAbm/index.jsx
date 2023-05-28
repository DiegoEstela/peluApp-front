import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import { Link } from "react-router-dom";
import { Title, AbmContainer } from "./style";
function ServicesAbm() {
  return (
    <AbmContainer>
      <Spacer width="300px" height="150px" />
      <Title> abm Servicios</Title>
      <Spacer width="300px" height="50px" />
      <Link to="/abmServices/add" className="link">
        <Button text="Cargar Servicios" color="#C2DFE3" />
      </Link>
      <Spacer width="300px" height="50px" />
      <Button text="Editar Servicios" color="#C2DFE3" />
      <Spacer width="300px" height="50px" />
      <Button text="Eliminar Servicios" color="#C2DFE3" />
    </AbmContainer>
  );
}

export default ServicesAbm;
