import styles from './StationInfo.module.css';
import { useLayoutEffect, useRef } from 'react';

const StationInfo = ({label, lat, long}) => {

    const wrap = useRef(null);

    useLayoutEffect(() => {
        // animate text using javascript animate() because we want it to run every time props update
        const animation = [{transform: "translate3d(0,0,0)"},{transform: "translate3d(0,-20px,0)"}];
        const fadein = [{opacity:"0"},{opacity:"100%"}];
        const timing = {
            duration: 500,
            iterations: 1,
            fill:"forwards"
          };
        wrap.current.animate(animation,timing);
        wrap.current.animate(fadein, timing);
    }, [label]);

    return (
        <div className={styles.stationwrapper} ref={wrap}>
            <div className={styles.station}>
                <h2 className={styles.station__name}>{label}</h2>
                <p className={styles.station__details}><span>Latitude: {lat}</span><span>Longitude: {long}</span></p>
            </div>
        </div>
    )
}

export default StationInfo;