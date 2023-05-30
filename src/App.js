import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Clients from "./views/ClientsAbm/AddClients";
import Home from "./views/Home";
import Products from "./views/ProductsAbm/AddProducts";
import Services from "./views/ServicesAbm/AddServices";
import Footer from "./components/Footer";
import { Container, FullContainer, Card } from "./App.style";
import ClientsAbm from "./views/ClientsAbm";
import ProductsAbm from "./views/ProductsAbm";
import ServicesAbm from "./views/ServicesAbm";
import EditClients from "./views/ClientsAbm/EditClients";
import AddRevenue from "./views/AddRevenue";
import AddExpense from "./views/AddExpenses";

function App() {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  // Llamar a disableScroll() cuando la aplicación se monta
  disableScroll();

  // Llamar a enableScroll() cuando la aplicación se desmonta
  window.addEventListener("beforeunload", enableScroll);

  return (
    <FullContainer>
      <Header />
      <Container>
        <Card>
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
            <Route path="/addExpense" element={<AddExpense />} />
          </Routes>
        </Card>
      </Container>
      <Footer />
    </FullContainer>
  );
}

export default App;
