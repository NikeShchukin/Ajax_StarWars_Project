import React from 'react';
import './App.css';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

export const CartContext = React.createContext(); // create Context to delegate it to all Components of the app

function App() {
  const [itemId, setItemId] = React.useState(1); // create State, which will keep the character ID
  const [infoType, setInfoType] = React.useState('people');
  const [photoType, setPhotoType] = React.useState('characters');
  const value = React.useMemo(() => ({itemId, setItemId, infoType, setInfoType, photoType, setPhotoType}), [itemId, infoType, photoType]); // create value, which only be changed when itemId changes
  
  return (
    <CartContext.Provider value={value}> {/* Provides CartContext for whole app*/}
      <div className="App">
          <Navigation/>
          <Button />
          <Card />
      </div>
    </CartContext.Provider>
  );
}

export default App;
