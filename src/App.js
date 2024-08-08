
import './styles/App.css';
import { Helmet } from 'react-helmet';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { Route, Routes } from "react-router-dom";
import Home from './components/home/Home';



gsap.registerPlugin(useGSAP,ScrollTrigger);

function App() {
  return (
    <>
    <Helmet>
    <title>Crown Industrial</title>
    <meta name="description" content="Crown Industrial Best Truck Rental Platform" />
    <meta name="keywords" content="Crown Industrial, Truck Rental, Rental Platform" />
  </Helmet>
  <Routes>
  <Route path="/" element={<Home />} />
  </Routes>
  
  </>


  );
}

export default App;
