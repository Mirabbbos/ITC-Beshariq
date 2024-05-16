//css
import './index.css';

// route
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Address from "../src/routes/address"
import BannerTrailerItem from './components/banner-trailer';
import Ourteam from './routes/ourteam';
import Teachers from './routes/teachers';

import { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You may need to import the CSS file as well



function App() {  
  useEffect(() => {
  AOS.init({
    duration:900,
  });
}, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<BannerTrailerItem />} />
            <Route path="/address" element={<Address />} />
            <Route path="/ourteam" element={<Ourteam />} />
            <Route path="/teachers" element={<Teachers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;