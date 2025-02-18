import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const HalfCircleChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '70%',
          background: 'transparent'
        },
        track: {
          background: '#e7e7e7'
        },
        dataLabels: {
          name: {
            show: false, 
          },
          value: {
          }
        }
      }
    },
    fill: {
      colors: ['#4CAF50'] 
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Satisfaction Level']
  };

  const series = [75]; 

  return (
    <div className="flex justify-center items-center h-full relative">
    <Chart options={options} series={series} type="radialBar" height={350} />
  </div>
  );
};

export default HalfCircleChart;