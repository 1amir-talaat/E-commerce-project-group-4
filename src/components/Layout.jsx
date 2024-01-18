import React, { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import NavBar from "./nav/NavBar";
import { Outlet } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";

function Layout() {
  console.log("layout");
  const [loding, setLoding] = useState(true);

  // setLoding(true)

  console.log(loding);
  useEffect(() => {
    setTimeout(() => {
      setLoding(!loding);
    }, 2500);
  }, []);

  return (
    <>
      <div className={`loder-container ${!loding && "d-none"}`}>
        <MutatingDots visible={true} height="100" width="100" color="#131921" secondaryColor="#131921" radius="12.2" />
      </div>

        <div className={loding ? "d-none" : "d-block"}>
          <NavBar />
          <Outlet />
          <Footer />
        </div>

    </>
  );
}

export default Layout;
