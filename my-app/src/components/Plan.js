import React from 'react'
import Navbar from './Navbar'
import Stocks from './Stocks';
import './index.css';


function Plan() {
  return (
    <div>
        <Navbar />
        <section className='plan'>
            <h1>Aktueller Spieseplan</h1>
            <Stocks />
        </section>
    </div>
  )
}

export default Plan