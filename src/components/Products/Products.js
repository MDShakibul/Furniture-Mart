import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [chooseOne, setChooseOne] = useState([]);
  

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelAddToCart = (product) => {
   const newCart = [...cart, product];
    setCart(newCart); 
  };

  const handleChooseOne =() =>{
    const select = [...cart];
    const random = Math.floor(Math.random() * select.length);
    setChooseOne(select[random]);

  }

  const handleChooseAgain =() =>{
    setCart([]);
    setChooseOne([]);
  }

  

  return (
    <div className="products-container">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleChooseAgain={handleChooseAgain} handleChooseOne={handleChooseOne} chooseOne={chooseOne}></Cart>
      </div>
    </div>
  );
};

export default Products;
