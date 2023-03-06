import React from 'react';
import './index.css';

function Navbar() {
  return (
    <div>
        <header className='Head'>
        <div className='logo'>
            <h1>Speiseplan</h1>
        </div>     

      <nav className="main-nav">
        <ul>
          <a className="link" href="index.html"><li>Aktueller Plan</li></a>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Navbar