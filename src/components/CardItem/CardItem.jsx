import React from "react";
import { useContext } from "react";
import { CartContext } from "../App/App";

function CardItem({ props, photoProps }) {
  const { infoType, itemId } = useContext(CartContext);

  if (infoType === "people") {
    return (
      <div>
        <img
          src={photoProps}
          alt={"photo: " + itemId}
          style={{ maxWidth: "200px" }}
        />
        {/* getting photo right away from another DB by id */}
        <div>
          <h3>{props.name}</h3>
          <hr />
          <p>Gender: {props.gender}</p>
          <hr />
          <p>Birth Year: {props.birth_year}</p>
          <hr />
          <p>Eye color: {props.eye_color}</p>
        </div>
      </div>
    );
  } else if (infoType === "planets") {
    return (
      <div>
        <div>
          <img
            src={photoProps}
            alt={"photo: " + itemId}
            style={{ maxWidth: "200px" }}
          />{" "}
          {/* getting photo right away from another DB by id */}
          <h3>{props.name}</h3>
          <hr />
          <p>Diameter: {props.diameter}</p>
          <hr />
          <p>Population: {props.population}</p>
          <hr />
          <p>Climate: {props.climate}</p>
        </div>
      </div>
    );
  } else if (infoType === "starships") {
    return (
      <div>
        <img
          src={photoProps}
          alt={"photo: " + itemId}
          style={{ maxWidth: "200px" }}
        />{" "}
        {/* getting photo right away from another DB by id */}
        <div>
          <h3>{props.name}</h3>
          <hr />
          <p>Length: {props.length}</p>
          <hr />
          <p>Crew: {props.crew}</p>
          <hr />
          <p>Passengers: {props.passengers}</p>
          <hr />
          <p>Starship class: {props.starship_class}</p>
        </div>
      </div>
    );
  }
}

export default CardItem;
