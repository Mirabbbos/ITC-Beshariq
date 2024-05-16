import React from "react";
import Header from "./components/header";

import "./App.css";
import BannerTrailerItem from "./components/banner-trailer";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import SectionTwo from "./components/hero";
import Download from "./components/download";
import Pictures from "./components/pictures";


export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
