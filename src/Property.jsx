import React from 'react';
import './css/style.css';


const Property = ({ name, image, isFavorite, onToggleFavorite }) => {
    

    const handleToggleFavorite = () => {
        onToggleFavorite(name);
  };
    
    return (
      <div className="property">
        <h2>{name}</h2>
        <img src={image} alt={name} className='property-img' />
        <br></br>
        <button onClick={() => handleToggleFavorite(name)}>
  {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
</button>
      </div>
    );
  }
  
  export default Property;