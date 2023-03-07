import axios from "axios";

export const getInfo = (itemId, infoType) =>
  axios
    .get(`https://www.swapi.tech/api/${infoType}/${itemId}`) // request to DB by id from CartContext
    .then((res) => res.data.result.properties); // waiting for a response and putting the exact data into State // error handling
export const getPhotoInfo = (itemId, photoType) =>
  axios
    .get(
      `https://starwars-visualguide.com/assets/img/${photoType}/${itemId}.jpg`
    ) // request to DB by id from CartContext
    .then(
      (res) =>
        `https://starwars-visualguide.com/assets/img/${photoType}/${itemId}.jpg`
    )
    .catch((error, res) =>
      error
        ? (res =
            "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
        : console.log(res.status)
    );
