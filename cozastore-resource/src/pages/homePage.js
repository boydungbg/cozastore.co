import React, { useEffect, useState } from "react";
import Slide from "../components/slide";
import Banner from "../components/banner";
import Product from "../components/product";
import productAPI from "../api/productApi";

function Home() {
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    productAPI.getProducts(16, 1).then((res) => setProducts(res));
  }, []);
  return (
    <div>
      <Slide></Slide>
      <Banner></Banner>
      <Product products={products}></Product>
    </div>
  );
}

export default Home;
