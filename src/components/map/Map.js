import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import styles from './Map.module.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const Map = () => {

    /*

    Using react-leaflet instead to avoid needing to manage state and dom updates directly with leaflet
    useEffect(() => {

        // need this to avoid getting an error but I don't know why it is needed
        var container = L.DomUtil.get("map");
        if (container != null) {
            container._leaflet_id = null;
        }

        const map = L.map('map').setView([51.505, -0.09], 13);
        const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("Meanwhile, somewhere near London...");
        marker.bindTooltip("my tooltip text");
    },[]);
    */
    
    return (
        <div className={styles.mapWrap}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;
