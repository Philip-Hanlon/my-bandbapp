import React from 'react';
import FavoriteProperty from './FavoriteProperty'; 
import './css/SideBar.css'
import './css/style.css'

const SideBar = ({ user }) => {
  return (
    <div className="sidebar">
      <h2>User Profile</h2>
      <div className="favorite-properties">
        <img src={user.image} alt="user" className='profile-image'></img>
        <h3>{user.name}</h3>
        <div className='sidebar-description'>{user.description}</div>
        <h4>most recent stay</h4>
        <div>{user.mostRecentStay}</div>
        
     
      </div>
    </div>
  );
}

export default SideBar;