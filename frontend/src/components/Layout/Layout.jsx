import React from "react";
import Header from "../Header/Header";
import Router from "../../router/Routers";
import Footer from "./../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
