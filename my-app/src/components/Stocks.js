import React from "react";
import data from '../data/response.json';
import "./index.css";

export const Stocks = () => {
  return (
    <div>
        <h1>Test</h1>
                 
         <table>
            {data.Allergens.map((items) => {
                return <tr key={items.Id} value={items.Id}>{items.Label}</tr>
            })}
        </table>
    </div>
  );
};

export default Stocks