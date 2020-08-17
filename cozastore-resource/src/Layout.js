import React from "react";
import Header from "./components/header";
import Cart from "./components/cart";
import Footer from "./components/footer";
import Motal from "./components/motal";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <Cart />
      {children}
      <Footer />
      <Motal />
    </React.Fragment>
  );
}

export default Layout;
