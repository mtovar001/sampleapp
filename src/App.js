import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import { Button, Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      </div>
  );
}

export default App;
