import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import BrandDark from "highcharts/themes/brand-dark";
import * as Moment from 'moment';
import * as mTZ from 'moment-timezone';
import styles from './chart.module.css';

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
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
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