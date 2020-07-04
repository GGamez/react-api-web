import ReactApexChart, {Apex} from "react-apexcharts";
import React, { Component } from 'react';
import ConsoleHelper from "../../../helper/ConsoleHelper";


const state =  
      {options: {
        chart: {
          shadow: {
            enabled: true,
            color: '#ffffff',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA','#0070c0', '#000000','#000000'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Average High & Low Temperature',
          align: 'left'
        },
        grid: {
          borderColor: '#ffffff',
          row: {
            colors: ['#ffffff', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.0
          },
        },
        markers: {

          size: 6
        },
        xaxis: {
          categories: [1,2,3,4,5],
          title: {
            text: 'Bloque'
          }
        },
        yaxis: {
          title: {
            text: 'Aciertos(HIT, CR) /Fallos(FA, OM)'
          },
          min: 0,
          max: 14
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
    series: [
      {
        name: "HIT",
        data: [1,2,3,1,2]
      },
      {
        name: "CR",
        data: [1,5,5,7,2]
      },
      {
        name: "FA",
        data: [1,4,6,8,2]
      },
      {
        name: "OM",
        data: [1,9,6,9,2]
      }
    ],
  }
    
  






function LineChart ({optiones, series}) {

ConsoleHelper(optiones)
    return (

        <div>
          <ReactApexChart options={optiones} series={series} type="line" height="350" />
        </div>

    );
}

export default LineChart;