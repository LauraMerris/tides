import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as Moment from 'moment';
import * as mTZ from 'moment-timezone';
import styles from './chart.module.css';
import {useRef, useLayoutEffect} from 'react';

window.moment = Moment;
mTZ();

const Chart = ({data, xLabel, yLabel, title}) => {

   //BrandDark(Highcharts);
    const options = {
        chart: {
          type: 'areaspline'
        },
        title: {
          text: title
        },
        time: {
            timezone: 'Europe/London'
        },
        xAxis: {
            type:'datetime',
            title:{
              text:xLabel
            }
        },  
        legend: {
          enabled: false
        },
        yAxis:{
            title:{
            text:yLabel
          }
        },
        plotOptions: {
          series: {
              fillColor: {
                  linearGradient: [0, 0, 0, 300],
                  stops: [
                      [0, "#aad3df"],
                      [1, "#fff"]
                  ]
              },
              color:"#537d8a",
              animation: {
                defer:500
              }
          }
        },
        series: [
          {
            data
          }
        ]
      };
    return (
        <div className={styles.chartwrap}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default Chart;