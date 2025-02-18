import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";

const CircleChart: React.FC = () => {
  const state = {
    series: [80],
    options: {
      chart: {
        height: 200,
        type: 'radialBar',
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            show: false,
            name: {
              fontSize: '20px',
              color: '#333',
              offsetY: -10,
            },
            value: {
              fontSize: '16px',
              color: '#333',
              formatter: (val: number) => {
                return `${val}%`;
              },
            },
          },
        },
      },
      fill: {
        type: 'solid',
        colors: ['#D9D9D9'],
      },
      stroke: {
        dashArray: 4,
      },
      labels: [ '0', '100'],
      annotations: {
        yaxis: [
          {
            y: 70,
            borderColor: '#D9D9D9',
            label: {
              text: '0',
              style: {
                color: '#fff',
                background: '#000',
                fontSize: '14px',
                padding: {
                  left: 6,
                  right: 6,
                },
              },
            },
          },
          {
            y: 100,
            borderColor: '#D9D9D9',
            label: {
              text: '100',
              style: {
                color: '#fff',
                background: '#000',
                fontSize: '14px',
                padding: {
                  left: 6,
                  right: 6,
                },
              },
            },
          },
        ],
      },
    } as ApexOptions,
  };

  return (
    <>
      <div id="chart" className="w-full max-w-xs mx-auto">
        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={200} />
      </div>
    </>
  );
}

export default CircleChart;