import styles from './StationInfo.module.css';
const StationInfo = ({label, lat, long}) => {
    return (
        <div className={styles.stationwrapper}>
            <div className={styles.station}>
                <h2 className={styles.station__name}>{label}</h2>
                <p className={styles.station__details}><span>Latitude: {lat}</span><span>Longitude: {long}</span></p>
            </div>
        </div>
    )
}

export default StationInfo;