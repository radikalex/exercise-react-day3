import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Reserve from "./components/Reserve/Reserve";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
