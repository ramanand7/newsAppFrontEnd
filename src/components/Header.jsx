import React from "react";
import "../App.css"; // If App.css is in the src directory


const Header=() =>{
    return (
    <header className="header">
      <div className="logo">NewsHub</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/world">World</a></li>
          <li><a href="/technology">Technology</a></li>
          <li><a href="/sports">Sports</a></li>
        </ul>
      </nav>
    </header>
    );
};

export default Header;