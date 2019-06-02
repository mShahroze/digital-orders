import React from 'react';
import './NavBar.css';

function SearchBox() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..."></input>
          <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
        </div>
      </div>
    </div>
  )
}

export default SearchBox;