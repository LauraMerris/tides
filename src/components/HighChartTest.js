import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighChartTest = () => {

    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };
      return (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )
}

export default HighChartTest;