import React, { useState, useEffect } from "react";
import data from '../data/response.json';
import './style.css'


function Speiseplan() {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
      // convert data from json file to table format
      const tableRows = data.Rows.map((row) => {
        const rowData = {};;
        rowData["Name"] = row.Name;
        row.Days.forEach((day) => {
          const productId = day.ProductIds[0].ProductId;
          const product = data.Products[productId];
          rowData[`Weekday${day.Weekday}`] = productId;
          rowData[`Allergens${day.Weekday}`] = product.AllergenIds.join(', ');
          rowData[`ProductName${day.Weekday}`] = product.Name;
          rowData[`Price${day.Weekday}`] = product.Price.Betrag;
        });
        return rowData;
      });
      setTableData(tableRows);
    }, []);

    
    return (
      <div>
        <section className="planSection">
        <div>
        </div>
        <h1 className="headline">Essenplan für die nächste Woche:</h1>
        <table>
          <br></br>
          <thead>
            <tr>
              <th>Name</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody> 
            {tableData.map((row, index) => (
                <tr key={index}>
                <td>{row.Name}</td>
                <td>{row.ProductName0}<br/>Price: {row.Price0} € <br/> Allergens: {row.Allergens0}</td>
                <td>{row.ProductName1}<br/>Price: {row.Price1} €<br/> Allergens: {row.Allergens1}</td>
                <td>{row.ProductName2}<br/>Price: {row.Price2} € <br/> Allergens: {row.Allergens2}</td>
                <td>{row.ProductName3}<br/>Price: {row.Price3} € <br/> Allergens: {row.Allergens3}</td>
                <td>{row.ProductName4}<br/>Price: {row.Price4} € <br className="distance"/> Allergens: {row.Allergens4}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </section>
      </div>
    );
}

export default Speiseplan