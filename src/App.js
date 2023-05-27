import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Clients from "./views/Clients";
import Home from "./views/Home";
import Products from "./views/Products";
import Services from "./views/Services";
import Footer from "./components/Footer";
import { Container } from "./App.style";
import ClientsAbm from "./views/ClientsAbm";
import ProductsAbm from "./views/ProductsAbm";
import ServicesAbm from "./views/ServicesAbm";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abmClients" element={<ClientsAbm />} />
          <Route path="/abmProducts" element={<ProductsAbm />} />
          <Route path="/abmServices" element={<ServicesAbm />} />
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
