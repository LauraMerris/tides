import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({data, title}) => {
    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: title
        },
        time: {
            timezone: 'Europe/London'
        },
        xAxis: {
            type:'datetime'
        },
        series: [
          {
            data: data.map(point => [new Date(point.dateTime).getTime(), point.value])
          }
        ]
      };
    return (
        <div>
            {/*data && data.map(({dateTime, value}) => `${dateTime} , ${value}`)*/}
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default Chart;