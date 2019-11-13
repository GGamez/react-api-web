import ApexCharts from "react-apexcharts";
import React, { Component } from 'react';
  
var generateDayWiseTimeSeries = function (baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  
export default function Chart() {

   
    const state = {
        options: {
          chart: {
            stacked: true,
            events: {
              selection: function (chart, e) {
                console.log(new Date(e.xaxis.min))
              }
            },
          },
          colors: ['#008FFB', '#00E396', '#CED4DC'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.6,
              opacityTo: 0.8,
            }
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left'
          },
          xaxis: {
            type: 'datetime'
          }
        },
        series: [
          {
            name: 'South',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'North',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 20
            })
          },
          {
            name: 'Central',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 15
            })
          }
        ],
      }

    
      return (
        


  
          <ApexCharts  options={state.options} series={state.series} type="area"  />
    
          


      );
    }
  


  