import React from 'react'
import Speiseplan from './components/Speiseplan'
import Products from './components/Products'

function App() {
  return (
    <div>
      App
      <div>
       <header>
        <div id="logo">
            <a href="#">
            Speiseplan
            </a>
        </div>

      <nav id="main-nav">
        <ul>
        <a class="link" href="#test"><li>Unsere Produkte</li></a>
        <a class="link" href="#test3"><li>Plan</li></a>
        <a class="link" href="#"><li><img className='accIcon' src={ require('./img/icons/user.png') } /></li></a>
        </ul>
      </nav>
    </header>
    </div>
      <Products id="test"></Products>
      <Speiseplan id="test3"></Speiseplan>
    </div>
  )
}

export default App
