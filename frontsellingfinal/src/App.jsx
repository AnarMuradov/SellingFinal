import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import MainLayout from './Layouts/MainLayout';
import AddPage from './Pages/AddPage';
import DetailPage from './Pages/DetailPage';
import Basket from './Pages/Basket';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path="/AddPage" element={<AddPage/>} />
        <Route path="/Basket" element={<Basket/>} />
        <Route path="/DetailPage/:id" element={<DetailPage/>} />

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
