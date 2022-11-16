import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Menu from "./Components/Menu";


import Paj1 from "./Components/Pages/Footer";
import Paj2 from "./Components/Testpaj/Paj2";
import Paj3 from "./Components/Testpaj/Paj3";
import Contato from "./Components/Testpaj/Contato";

function App() {


  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a1' element={<Paj1 />} />
        <Route path='/a2' element={<Paj2 />} />
        <Route path='/a3' element={<Paj3 />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
