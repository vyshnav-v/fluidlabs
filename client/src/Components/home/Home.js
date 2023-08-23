import React, { useState } from "react";
import './home.css'
import Navbar from "../navbar/Navbar";
import ProductCard from "../product/ProductCard";
import Pagination from "./Pagination";
import Footer from "../footer/Footer";
const Home = () => {
    
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='flex flex-wrap mt-16 justify-center'>
        
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
