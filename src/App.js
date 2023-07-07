import './App.css';
import Map from './components/map/Map';
import { useState, useEffect } from 'react';
import StationInfo from './components/stationInfo/StationInfo';
import Chart from './components/chart/Chart.js';
import WaveText from './components/waveText/WaveText';
import WelcomeMessage from './components/welcomeMessage/WelcomeMessage';

function App() {

  const [subStations, setSubStations] = useState([]);
  const [selectedStationData, setSelectedStationData] = useState([]);
  const [selectedStationInfo, setSelectedStationInfo] = useState('');
  const [locationSelected, setLocationSelected] = useState(false);


  const markerSelectedHandler = (ref) => {

  // using the uri from the measure id instead of the below query string, which is much slower
  //`http://environment.data.gov.uk/flood-monitoring/data/readings?today&stationReference=${ref}`

    setLocationSelected(true);

    const station = subStations.find(item => item.measureID === ref);
    setSelectedStationInfo(station);

    const stationSecure = ref.replace('http','https');
   
    fetch(`${stationSecure}/readings?today`)
    .then(response => response.json())
    .then(data => {
      const sorted = data.items.map(item => {
        return [
          new Date(item.dateTime).getTime(), 
          item.value
        ]
      });

      setSelectedStationData(sorted);
    })
    .catch(e => console.log(e.message));
  }

  useEffect(() => {
    let active = true;
    fetch("https://environment.data.gov.uk/flood-monitoring/id/stations?type=TideGauge&unitName=m")
      .then(response => response.json())
      .then(data => {
        // this aborts stale requests if multiple requests are in-flight at once.
        if (active) {
      
          const subs = data.items.map(({ label, lat, long, stationReference, measures:[ { '@id': measureID} ] }) => ({label, lat, long, stationReference, measureID}) );    

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

  let stationDataComponent = 
    <>
      {selectedStationInfo ? <StationInfo label={selectedStationInfo.label} lat={selectedStationInfo.lat} long={selectedStationInfo.long} /> : <div>Station not found</div>}
      {<div className="chartwrap">
        {selectedStationData.length > 0 ? <Chart data={selectedStationData} xLabel="Time today" yLabel="Local Measurement (m)" /> : <div className="messagewrap fadeupfast"><p className="message">Sorry, we can't get the tides for this location right now.</p></div>}
      </div>}
    </>;

  return (
    <div className="app">
      <section className="main">
        <div className="map">
          <Map markers={subStations} onMarkerSelected={markerSelectedHandler} />
        </div>
        <div className="stationpanel">
          <WaveText phrase="TIDAL" />
          <div className="stationinfowrap">
            {locationSelected ? stationDataComponent : <WelcomeMessage />}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
