import React from "react";
import Footer from "../../components/footer/Footer";
import Landing from "../../components/landingpage/Landing";
import { NavbarHome } from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <NavbarHome />
      <div
        style={{
          position: "absolute",
          top: "80px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Landing />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
