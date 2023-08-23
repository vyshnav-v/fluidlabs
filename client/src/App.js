import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/Home";
import Login from "./Components/LoginAndRegister/Login";
import AddProduct from "./Components/addProduct/AddProduct";
function App() {
  const token = localStorage.getItem("token");
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={token ? <Navigate to='/home' /> : <Navigate to='/login' />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
