import React from "react";
import Styles from "./home.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Footer />
    </div>
  );
};

export default home;
