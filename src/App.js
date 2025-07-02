import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import TopNav from "./include/TopNav";
import Footer from "./include/Footer";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import 'bootstrap/dist/css/bootstrap.min.css';

import './scss/style.scss';



function App() {
  return (
<>
    <HashRouter>
      <Routes>
        <Route path="/" element={<TopNav/>}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>

</>
  );
}

export default App;
