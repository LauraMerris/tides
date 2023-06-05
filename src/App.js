import './App.css';
import Map from './components/map/Map';
import { useState, useEffect } from 'react';

function App() {

  const [stations, setStations] = useState([]);
  const [subStations, setSubStations] = useState([]);

  useEffect(() => {
    let active = true;
    setStations(null);
    fetch("http://environment.data.gov.uk/flood-monitoring/id/stations?type=TideGauge&unitName=m")
      .then(response => response.json())
      .then(data => {
        // this aborts stale requests if multiple requests are in-flight at once.
        if (active) {
          setStations(data.items);
          const subStations = data.items.map(({label, lat, long, stationReference}) => ({label, lat, long, stationReference}) );
          setSubStations(subStations);
        }
      })
      .catch(e => {
        console.log(e.message);
      });
    return () => {
      //cleanup function that runs before any subsequent calls
      //shouldn't need it here because this only runs once?
      active = false;
    }
  },[])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section id="main">
        <Map markers={subStations} />
      </section>
    </div>
  );
}

export default App;
