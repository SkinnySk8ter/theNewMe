import './App.css';
import {Link} from 'react-router-dom'
// import HomePage from './HomePage/HomePage';

function App() {
  // const handleClick = () => {<Link to={<HomePage/>}></Link>}

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the mind of Jody!
        </p>
        <Link to="/HomePage" className="btn btn-primary">Take A Look!</Link>
        {/* <button onClick={handleClick}> Take a Look</button> */}
      </header>
    </div>
  );
}

export default App;
 