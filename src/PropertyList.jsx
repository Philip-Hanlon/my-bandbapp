
import React, { useState } from 'react';
import './css/style.css';
import Property from './Property'; 
import FavoriteProperty from './FavoriteProperty';

const PropertyList = ({ properties }) => {
    const [favorites, setFavorites] = useState([]);
  
    const onToggleFavorite = (propertyName) => {
      if (favorites.includes(propertyName)) {
        setFavorites(favorites.filter(item => item !== propertyName));
      } else {
        setFavorites([...favorites, propertyName]);
      }
    };
  
    return (
      <div className="property-list">
        <h2>Properties</h2>
        <div className="property-list-items">
          {properties.map((property, index) => (
            <Property 
              key={index} 
              name={property.name} 
              image={property.image} 
              isFavorite={favorites.includes(property.name)} 
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
        <h2>Favorite Properties</h2>
        <div className="favorite-properties">
          {favorites.map((favorite, index) => (
            <FavoriteProperty key={index} name={favorite} />
          ))}
        </div>
      </div>
    );
  }
  
  export default PropertyList; 
