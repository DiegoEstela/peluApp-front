import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Clients from "./views/Clients";
import Home from "./views/Home";
import Products from "./views/Products";
import Services from "./views/services";
import Footer from "./components/Footer";
import { Container } from "./App.style";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
