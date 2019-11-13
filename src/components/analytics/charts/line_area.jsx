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

    
  const state = function(){ return (
    {  options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: []
      }
    },
    series: [
      {
        name: "series-1",
        data: []
      }
    ],
   
    } 
  )}
    
 

  
export default function Chart(winns) {

 
      let estado = {};
      console.log(winns.winns)
      estado = state();
      estado.series[0].data = winns.winns
      // Object.keys(winns).map(matches =>{estado.series[0].data = winns;
      //  })

      //  console.log(estado.series)
      
       
        
        return (
        


  
          <ApexCharts  options={estado.options} series={estado.series} type="line"  />
    
          


      );
      
    
      
    }
  