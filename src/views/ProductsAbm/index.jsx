import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import { Title } from "./style";
function ProductsAbm() {
  return (
    <>
      <Spacer width="300px" height="150px" />
      <Title> abm productos</Title>
      <Spacer width="300px" height="50px" />
      <Button text="Cargar Productos" color="#C2DFE3" />
      <Spacer width="300px" height="50px" />
      <Button text="Editar Productos" color="#C2DFE3" />
      <Spacer width="300px" height="50px" />
      <Button text="Eliminar Productos" color="#C2DFE3" />
    </>
  );
}

export default ProductsAbm;
