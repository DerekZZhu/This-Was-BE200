import Map from './components/Map.jsx'
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Map data={data}/>
    </div>
  );
}

export default App;
