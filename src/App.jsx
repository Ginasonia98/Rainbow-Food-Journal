import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormRegister from "./pages/Register";
import FormLogin from "./pages/Login";
import Home from "./pages/Home";
import FoodDetail from "./pages/FoodDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<FormRegister />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<FoodDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
