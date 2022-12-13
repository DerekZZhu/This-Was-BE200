import Map from './components/Map.jsx'
import data from './data.json'
import COLORS from './COLORS.json'

function App() {
  return (
    <div className="App">
      <Map data={data} theme={COLORS.rainbow}/>
    </div>
  );
}

export default App;
