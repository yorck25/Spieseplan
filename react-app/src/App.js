import React, { useState, useEffect } from "react";
import './App.css';
import data from './data/response.json';

function App() {

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
        rowData[`Allergens${day.Weekday}`] = product.AllergenIds;
        rowData[`ProductName${day.Weekday}`] = product.Name;
        rowData[`ProductName${day.Weekday}`] = product.Name;

        // rowData[`Weekday${day.Weekday}`] = day.ProductIds[0].ProductId;
        // name = data.Products[day.ProductIds[0].ProductId].Name;
        // allergien = data.Products[day.ProductIds[0].ProductId].AllergenIds;
      });
      //console.log(name);
      return rowData;
    });

    setTableData(tableRows);
  }, []);
  return (
    <div>
      <div>
        babsfsdfsdfsdf
      </div>
      <table>
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
              <td>{row.ProductName0}</td>
              <td>{row.ProductName1}</td>
              <td>{row.ProductName2}</td>
              <td>{row.ProductName3}</td>
              <td>{row.ProductName4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
