import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import styles from './Map.module.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';

const Map = ({markers, onMarkerSelected}) => {
    
    return (
        <div className={styles.mapWrap}>
            <MapContainer center={[54.5, -3.59]} zoom={6} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((elem) => {
                    return (
                        <Marker key={elem.stationReference} position={[elem.lat, elem.long]} eventHandlers={{click: () => onMarkerSelected(elem.measureID)}}>
                            <Tooltip>
                                {elem.label}
                            </Tooltip>
                        </Marker>
                    )
                })}         
            </MapContainer>
        </div>
    )
}

export default Map;
