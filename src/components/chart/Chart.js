import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as Moment from 'moment';
import * as mTZ from 'moment-timezone';

window.moment = Moment;
mTZ();

const Chart = ({data, xLabel, yLabel}) => {

    const options = {
        chart: {
          type: 'areaspline'
        },
        title: {
          text: ""
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
                      [0, "#a8dff0"],
                      [1, "#fff"]
                  ]
              },
              color:"#42aac9",
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    )
}

export default Chart;