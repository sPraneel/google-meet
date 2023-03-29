import dbRef from './server/firebase';
import './App.css';
import { userName } from './server/firebase';

function App() {
  return (
    <div className="App">
 { userName } 
    </div>
  );
}

export default App;
