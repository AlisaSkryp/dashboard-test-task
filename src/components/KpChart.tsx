import React from "react";
import Chart from "react-apexcharts";

import "../index.css";

export const KpChart: React.FC = () => {
  return (
    <>
      <Chart
        type="bar"
        height={200}
        width="100%"
        series={[
          {
            name: "KP Value",
            data: [85, 70, 20, 55, 22]
          }
        ]}
        options={{
          chart: {
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            bar: {
              borderRadius: 6,
              columnWidth: '45%',
              distributed: true
            }
          },
          colors: ['#6366F1', '#60A5FA', '#3B82F6', '#4FD1C5', '#34D399'],
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['KP 1', 'KP 2', 'KP 3', 'KP 4', 'KP 5'],
            labels: {
              style: {
                colors: '#6B7280'
              }
            }
          },
          yaxis: {
            min: 0,
            max: 100,
            tickAmount: 4,

            labels: {
              formatter: function (val) {
                return val + '%';
              },
              style: {
                colors: '#6B7280'
              }
            }
          },
          grid: {
            borderColor: '#E5E7EB',
            strokeDashArray: 4
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + '%'
              }
            }
          }
        }}
      />
    </>
  )
}

export default KpChart