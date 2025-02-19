import React from "react";
import Chart from "react-apexcharts";

import "../index.css";

export const BarChart: React.FC = () => {
  return (
    <Chart
      type="bar"
      height={200}
      width="100%"
      series={[
        {
          name: 'Score',
          data: [4.3, 1.8, 2.2, 4.3, 1.5, 4.3, 4.3, 1.9, 2.2, 4.3, 1.5, 4.3]
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
            borderRadius: 4,
            columnWidth: '40%'
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#FF9F7B'],
        xaxis: {
          categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          min: 0,
          max: 5,
          tickAmount: 5,
          labels: {
            formatter: (value) => Math.round(value).toString()
          }
        },
        grid: {
          borderColor: '#f3f4f6',
          strokeDashArray: 1,
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        tooltip: {
          enabled: true,
          theme: 'light',
          style: {
            fontSize: '12px'
          }
        }
      }}
    />
  )
}

export default BarChart;