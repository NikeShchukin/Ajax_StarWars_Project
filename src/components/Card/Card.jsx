import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../App/App";
import CardItem from "../CardItem/CardItem";
import { getInfo, getPhotoInfo } from "../../services/sw-service"; // import function that fetch data from DB using axios

const Card = () => {
  const { itemId, infoType, photoType } = useContext(CartContext); // getting the Context which is imported from App.js and consists ID
  const [info, setInfo] = useState([]); // create a State for storing Info
  const [photoInfo, setPhotoInfo] = useState([]);
  useEffect(() => {
    // use this method for rendering new Component only if itemId changed
    // React recomendation))
    const fetchData = async () => {
      setInfo(await getInfo(itemId, infoType));
      setPhotoInfo(await getPhotoInfo(itemId, photoType));
    }; // create async function that waits for the received data and pushes it to State
    fetchData(); // immediately calling function
  }, [itemId, infoType]); // renders when this argument changes

  return (
    <div>
      <CardItem props={info} photoProps={photoInfo} />
    </div>
  );
};

export default Card;
