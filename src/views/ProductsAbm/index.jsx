import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import { Link } from "react-router-dom";
import { Title, AbmContainer } from "./style";
import ButtonClosed from "../../components/ButtonClosed";
function ProductsAbm() {
  return (
    <AbmContainer>
      <ButtonClosed />
      <Title> Menu Productos</Title>
      <Spacer width="300px" height="3vh" />
      <Link to="/abmProducts/add" className="link">
        <Button text="Nuevo Producto" color="#C2DFE3" />
      </Link>
      <Spacer width="300px" height="3vh" />
      <Button text="Editar Producto" color="#C2DFE3" />
      <Spacer width="300px" height="3vh" />
      <Button text="Eliminar Producto" color="#C2DFE3" />
    </AbmContainer>
  );
}

export default ProductsAbm;
