import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./views/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
