import './App.css';
import Map from './components/map/Map';
import { useState, useEffect } from 'react';
import Chart from './components/Chart/Chart';

function App() {

  const [subStations, setSubStations] = useState([]);
  const [selectedStationData, setSelectedStationData] = useState([]);
  const [selectedStationInfo, setSelectedStationInfo] = useState('');

  const markerSelectedHandler = (ref) => {

    // want to call 
    // http://environment.data.gov.uk/flood-monitoring/id/stations/E72639?_view=full
    // how best to get station ID?

  // using the uri from the measure id instead of the below query string, which is much slower
  //`http://environment.data.gov.uk/flood-monitoring/data/readings?today&stationReference=${ref}`

  // how to get the station info here?
  // title and station info
   
    fetch(`${ref}/readings?today`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setSelectedStationData(data.items);
    })
    .catch(e => console.log(e.message));
  }

  useEffect(() => {
    let active = true;
    fetch("http://environment.data.gov.uk/flood-monitoring/id/stations?type=TideGauge&unitName=m")
      .then(response => response.json())
      .then(data => {
        // this aborts stale requests if multiple requests are in-flight at once.
        if (active) {
      
          const subs = data.items.map(({ label, lat, long, stationReference, measures:[ { ['@id']: measureID} ] }) => ({label, lat, long, stationReference, measureID}) );    

          setSubStations(subs);
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
      <section className="main">
        <div className="map">
          <Map markers={subStations} onMarkerSelected={markerSelectedHandler} />
        </div>
        <div className="stationInfo">
          <h1>Tidal</h1>
          <Chart data={selectedStationData} title="" />
        </div>
      </section>
    </div>
  );
}

export default App;
