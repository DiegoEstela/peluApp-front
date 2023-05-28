import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import { Link } from "react-router-dom";
import { Title, AbmContainer } from "./style";
function ProductsAbm() {
  return (
    <AbmContainer>
      <Spacer width="300px" height="150px" />
      <Title> abm productos</Title>
      <Spacer width="300px" height="50px" />
      <Link to="/abmProducts/add" className="link">
        <Button text="Cargar Productos" color="#C2DFE3" />
      </Link>
      <Spacer width="300px" height="50px" />
      <Button text="Editar Productos" color="#C2DFE3" />
      <Spacer width="300px" height="50px" />
      <Button text="Eliminar Productos" color="#C2DFE3" />
    </AbmContainer>
  );
}

export default ProductsAbm;
