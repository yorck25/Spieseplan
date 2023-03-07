import React from 'react'
import './style.css';

function Navbar() {
  return (
    <div>
       <header>
        <div id="logo">
            <a href="#">
            Speiseplan
            </a>
        </div>

      <nav id="main-nav">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <ul>
        <a class="link" href="#"><li>Produkte</li></a>
        <a class="link" href="#"><li>Plan</li></a>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Navbar 