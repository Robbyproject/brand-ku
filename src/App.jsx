import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import { featureData } from "./data/features";

const App = () => {
  const [features] = useState(featureData);

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home features={features} />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;