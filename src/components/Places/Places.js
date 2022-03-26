import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Place from "../Place/Place";
import "./Places.css";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [cart, setCart] = useState([]);
  const [chooseOne, setChooseOne] = useState([]);
  

  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  const handelAddToCart = (place) => {
    const newCart = [...cart, place];
    setCart(newCart);
  };

  const handleChooseOne =() =>{
    setChooseOne([]);
    const select = [...cart];
    const random = Math.floor(Math.random() * select.length);
    setChooseOne(select[random]);

  }

  const handleChooseAgain =() =>{
    setCart([]);
    setChooseOne([]);
  }

  

  return (
    <div className="places-container">
      <div className="places">
        {places.map((place) => (
          <Place
            key={place.id}
            place={place}
            handelAddToCart={handelAddToCart}
          ></Place>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleChooseAgain={handleChooseAgain} handleChooseOne={handleChooseOne} chooseOne={chooseOne}></Cart>
      </div>
    </div>
  );
};

export default Places;
