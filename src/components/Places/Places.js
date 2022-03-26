import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Place from "../Place/Place";
import "./Places.css";

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div className="places-container">
      <div className="places">
        {places.map((place) => (
          <Place key={place.id} place={place}></Place>
        ))}
      </div>
      <div className="cart-container">
      <Cart></Cart>
      </div>
    </div>
  );
};

export default Places;
