import React, { useContext } from 'react';
import { CartContext } from "../App/App";

function Button() {
    const {itemId, setItemId} = useContext(CartContext); // the CartContext which keeps an ID

    const increment = () => setItemId(() => itemId + 1); //the function that increments the ID of character, stored in CartContext

    return (
        <button onClick={increment}>NEXT</button> // only works when button is clicked
    );
}

export default Button;