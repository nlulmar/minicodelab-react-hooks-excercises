import './App.css';
import BitcoinConversor from './components/BitcoinConversor';
import AvengersPanel from './components/SelectAvenger';
import ChangeName from './components/ChangeName';

function App() {
  return (
    <div className="App">
      <BitcoinConversor />
      <AvengersPanel />
      <ChangeName />
    </div>
  );
}

export default App;
