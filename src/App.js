import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Clients from "./views/ClientsAbm/AddClients";
import Home from "./views/Home";
import Products from "./views/ProductsAbm/AddProducts";
import Services from "./views/ServicesAbm/AddServices";
import Footer from "./components/Footer";
import { Container, FullContainer } from "./App.style";
import ClientsAbm from "./views/ClientsAbm";
import ProductsAbm from "./views/ProductsAbm";
import ServicesAbm from "./views/ServicesAbm";
import EditClients from "./views/ClientsAbm/EditClients";
import AddRevenue from "./views/AddRevenue";

function App() {
  return (
    <FullContainer>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abmClients" element={<ClientsAbm />} />
          <Route path="/abmClients/add" element={<Clients />} />
          <Route path="/abmClients/edit" element={<EditClients />} />
          <Route path="/abmProducts" element={<ProductsAbm />} />
          <Route path="/abmProducts/add" element={<Products />} />
          <Route path="/abmServices" element={<ServicesAbm />} />
          <Route path="/abmServices/add" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/addRevenue" element={<AddRevenue />} />
        </Routes>
      </Container>
      <Footer />
    </FullContainer>
  );
}

export default App;
