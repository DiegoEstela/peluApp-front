import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";
import Header from "./components/header/header";
import Clients from "./views/ClientsAbm/AddClients";
import Home from "./views/Home";
import Products from "./views/ProductsAbm/AddProducts";
import Services from "./views/ServicesAbm/AddServices";
import Footer from "./components/Footer";
import "./App.css";
import ClientsAbm from "./views/ClientsAbm";
import ProductsAbm from "./views/ProductsAbm";
import ServicesAbm from "./views/ServicesAbm";
import EditClients from "./views/ClientsAbm/EditClients";
import AddRevenue from "./views/AddRevenue";
import AddExpense from "./views/AddExpenses";
import Login from "./components/Login";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <div className="fullContainer">
          <Header />
          <div className="container">
            <div className="card">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/abmClients" element={<ClientsAbm />} />
                <Route path="/abmClients/add" element={<Clients />} />
                <Route path="/abmClients/edit" element={<EditClients />} />
                <Route path="/abmProducts" element={<ProductsAbm />} />
                <Route path="/abmProducts/add" element={<Products />} />
                <Route path="/abmProducts/edit" element={<EditClients />} />
                <Route path="/abmServices" element={<ServicesAbm />} />
                <Route path="/abmServices/add" element={<Services />} />
                <Route path="/addRevenue" element={<AddRevenue />} />
                <Route path="/addExpense" element={<AddExpense />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="containerLogin">
          <div className="card">
            <Login />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
