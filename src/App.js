import Map from './components/Map.jsx'
import Card from './components/Card.jsx'

function App() {
  return (
    <div className="App">
      {/* <Map/> */}
      <Card 
        image="https://www.tripsavvy.com/thmb/FJzbLMZM9UHw31CiSbePEa-ILPc=/3521x1981/smart/filters:no_upscale()/GettyImages-109287627-5b66fb4f46e0fb0050fabc66.jpg"
        name="Union Square"
        info="YUMYUMYUM"
        coords={[37.78755, -122.40661]}
      />
    </div>
  );
}

export default App;
