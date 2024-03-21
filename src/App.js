///import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import PropertyList from './PropertyList';
import SideBar from './SideBar';

function App() {
  const user = {
    name: 'David Beckham',
    image: 'https://img.a.transfermarkt.technology/portrait/big/3139-1459504284.jpg?lm=1',
    description: '"My wife likes expensive things and i do as im told, fancy cottages"',
    mostRecentStay: 'Cozy Cabin', 
};
  const [likedCount, setLikedCount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (propertyName) => {
    console.log("Clicked property:", propertyName); 
    setFavorites(prevFavorites => {
      const updatedFavorites = new Set(prevFavorites); 
      if (updatedFavorites.has(propertyName)) {
        console.log("Removing from favorites:", propertyName); 
        updatedFavorites.delete(propertyName); 
        setLikedCount(prevLikedCount => prevLikedCount - 1); 
      } else {
        console.log("Adding to favorites:", propertyName); 
        updatedFavorites.add(propertyName); 
        setLikedCount(prevLikedCount => prevLikedCount + 1); 
      }
      console.log("Updated favorites:", Array.from(updatedFavorites)); 
    });
  };
  

  const properties = [
    { name: "Cozy Cottage", image: "https://hips.hearstapps.com/hmg-prod/images/airbnb-beach-house-uk-1-1654694249.jpg?crop=1xw:1xh;center,top&resize=980:*"  },
    { name: "Sunny Villa", image: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/01/Chancellors-Swiss-Cottage.jpg " },
    
  ];

  return (
    <div>
      <Header />
      <main>
        <div>
          <Home />
          
          <PropertyList properties={properties} onToggleFavorite={handleToggleFavorite} />
          <SideBar user={user} />
        </div>
      </main>
    </div>
  );
}

export default App;

