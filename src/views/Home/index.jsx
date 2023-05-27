import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import { Title } from "./style";
function Home() {
  return (
    <>
      <Title> Peluqueria</Title>
      <Spacer width="300px" height="100px" />
      <Button text="Agregar Corte" color="#C2DFE3" />
    </>
  );
}

export default Home;
