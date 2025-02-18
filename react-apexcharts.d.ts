declare module 'react-apexcharts' {
  import * as React from 'react';
  import { ApexOptions } from 'apexcharts';

  // Define the props interface for the Chart component
  export interface ChartProps {
      type: 'bar' | 'line' | 'area' | 'pie' | 'donut'; // Add other types as needed
      height?: number | string;
      series: Array<{
          name?: string;
          data: number[];
      }>;
      options: ApexOptions; // Use ApexOptions to define the type of options prop
  }

  // Declare Chart as a class component
  const Chart: React.FC<ChartProps>;
}