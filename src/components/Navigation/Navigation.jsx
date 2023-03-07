import React, { useContext } from "react";
import { CartContext } from "../App/App";

function Navigation() {
  const { setInfoType, setItemId ,setPhotoType } = useContext(CartContext);

  return (
    <div>
      <button
        onClick={() => {
          setInfoType("people");
          setItemId(1);
          setPhotoType("characters");
        }}>
        People
      </button>
      <button onClick={() => {
          setInfoType("planets");
          setItemId(1);
          setPhotoType("planets");
        }}>
            Planets
        </button>
      <button onClick={() => {
          setInfoType("starships");
          setItemId(2);
          setPhotoType("starships");
        }}>
            Starships
        </button>
    </div>
  );
}

export default Navigation;
