import logo from './logo.svg';
import './App.css';
import Plan from './components/Plan';
import data from './data/response.json';

function App() {
  return (
    <div>
      <Plan />
      <br></br>

      {
        data.Rows && data.Rows.map( data => {
          return(
            <div className='box'>
              {data.Name}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
