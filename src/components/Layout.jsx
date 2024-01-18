import React, { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import NavBar from "./nav/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
