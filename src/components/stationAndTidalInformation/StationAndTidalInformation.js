import StationInfo from "../stationInfo/StationInfo";
import Chart from "../chart/Chart";
import styles from "./StationAndTidalInformation.module.css";

const StationAndTidalInformation = ({stationInfo, stationData}) => {
    return (
        <div className={styles.stationInfoWrap}>
            <StationInfo label={stationInfo.label} lat={stationInfo.lat} long={stationInfo.long} />
            <Chart data={stationData} xLabel="Time today" yLabel="Local Measurement (m)" title="" />
        </div>
    )
}

export default StationAndTidalInformation;