import { HomeContainer } from "./style";
import { auth } from "../../app/db";
import ClockWidget from "../../components/ClockWidget";
import Button from "../../components/Button";

function Home() {
  return (
    <HomeContainer>
      <h1> caja </h1>
      <ClockWidget />
      <Button
        onClick={() => auth.signOut()}
        text="Cerrar Sesion"
        color="#C2DFE3"
      />
    </HomeContainer>
  );
}

export default Home;
