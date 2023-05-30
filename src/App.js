import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
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
import Login from "./components/Login";

function App() {
  return (
    <FullContainer>
      <AuthProvider>
        <Header />
        <Container>
          <Card>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <PrivateRoute component={Home} redirectPath="/login" />
                }
              />
              <Route
                path="/abmClients"
                element={
                  <PrivateRoute component={ClientsAbm} redirectPath="/login" />
                }
              />
              <Route
                path="/abmClients/add"
                element={
                  <PrivateRoute component={Clients} redirectPath="/login" />
                }
              />
              <Route
                path="/clients"
                element={
                  <PrivateRoute component={Clients} redirectPath="/login" />
                }
              />
              <Route
                path="/abmClients/edit"
                element={
                  <PrivateRoute component={EditClients} redirectPath="/login" />
                }
              />
              <Route
                path="/abmProducts"
                element={
                  <PrivateRoute component={ProductsAbm} redirectPath="/login" />
                }
              />
              <Route
                path="/abmProducts/add"
                element={
                  <PrivateRoute component={Products} redirectPath="/login" />
                }
              />
              <Route
                path="/abmServices"
                element={
                  <PrivateRoute component={ServicesAbm} redirectPath="/login" />
                }
              />
              <Route
                path="/abmServices/add"
                element={
                  <PrivateRoute component={Services} redirectPath="/login" />
                }
              />
              <Route
                path="/addRevenue"
                element={
                  <PrivateRoute component={AddRevenue} redirectPath="/login" />
                }
              />
              <Route
                path="/addExpense"
                element={
                  <PrivateRoute component={AddExpense} redirectPath="/login" />
                }
              />
            </Routes>
          </Card>
        </Container>
        <Footer />
      </AuthProvider>
    </FullContainer>
  );
}

export default App;
