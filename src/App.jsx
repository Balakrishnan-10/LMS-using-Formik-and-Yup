import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Footer from "./Components/Footer";
import Create from "./Pages/Create";

const App = () => {
  const [id, setId] = useState(0);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setId={setId} />} />
        <Route path="/edit/:id" element={<Edit id={id}/>} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
