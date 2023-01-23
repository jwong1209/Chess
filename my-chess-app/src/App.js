import logo from './logo.svg';
import './App.css';
import Chessboard from './components/Chessboard.js';

function App() {
  return (
    <div className="App">
      <div id = "field">
        <Chessboard/>
      </div>
    </div>
  );
}

export default App;
