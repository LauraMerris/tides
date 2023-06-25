import styles from './StationInfo.module.css';
const StationInfo = () => {
    return (
        <div className={styles.stationwrapper}>
            <div className={styles.station}>
                <h2 className={styles.station__name}>Station Name</h2>
                <p className={styles.station__details}>Latitude: xxxx</p>
                <p className={styles.station__details}>Longitude: xxxx</p>
                <p></p>
            </div>
        </div>
    )
}

export default StationInfo;