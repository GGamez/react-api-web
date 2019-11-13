import ApexCharts from "react-apexcharts";
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
  
export default function Chart() {

   
  
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '60px',
      display:'flex',
      justifyContent:'center'
    },
    paper1: {
      padding: theme.spacing(3),
      textAlign: 'center',
      marginRight: 'auto',
      marginLeft: '25px',
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'left',
     
      color: theme.palette.text.secondary,
    },
    gridContainer:{
      padding: theme.spacing(3),
    },
    gameContainer: {
      padding: theme.spacing(3),
      textAlign: 'center',
      marginRight: 'auto',
      marginLeft: '25px',
      display: 'flex',
      justifyContent: 'center',
      height:'800px',
      width:'800px',
      // backgroundImage: 'url('+backGame+')',
      color: theme.palette.text.secondary,
    },
    paper2: {
     
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '60px',
      width: '60%',
    },
   
  }));
  
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  var arrayData = [{
    y: 400,
    quarters: [{
      x: 'Q1',
      y: 120
    }, {
      x: 'Q2',
      y: 90
    }, {
      x: 'Q3',
      y: 100
    }, {
      x: 'Q4',
      y: 90
    }]
  }, {
    y: 430,
    quarters: [{
      x: 'Q1',
      y: 120
    }, {
      x: 'Q2',
      y: 110
    }, {
      x: 'Q3',
      y: 90
    }, {
      x: 'Q4',
      y: 110
    }]
  }, {
    y: 448,
    quarters: [{
      x: 'Q1',
      y: 70
    }, {
      x: 'Q2',
      y: 100
    }, {
      x: 'Q3',
      y: 140
    }, {
      x: 'Q4',
      y: 138
    }]
  }, {
    y: 470,
    quarters: [{
      x: 'Q1',
      y: 150
    }, {
      x: 'Q2',
      y: 60
    }, {
      x: 'Q3',
      y: 190
    }, {
      x: 'Q4',
      y: 70
    }]
  }, {
    y: 540,
    quarters: [{
      x: 'Q1',
      y: 120
    }, {
      x: 'Q2',
      y: 120
    }, {
      x: 'Q3',
      y: 130
    }, {
      x: 'Q4',
      y: 170
    }]
  }, {
    y: 580,
    quarters: [{
      x: 'Q1',
      y: 170
    }, {
      x: 'Q2',
      y: 130
    }, {
      x: 'Q3',
      y: 120
    }, {
      x: 'Q4',
      y: 160
    }]
  }];
  
  
  function makeData() {
    var dataSet = shuffleArray(arrayData)
  
    var dataYearSeries = [{
      x: "2011",
      y: dataSet[0].y,
      
      quarters: dataSet[0].quarters
    }, {
      x: "2012",
      y: dataSet[1].y,
    
      quarters: dataSet[1].quarters
    }, {
      x: "2013",
      y: dataSet[2].y,
     
      quarters: dataSet[2].quarters
    }, {
      x: "2014",
      y: dataSet[3].y,
   
      quarters: dataSet[3].quarters
    }, {
      x: "2015",
      y: dataSet[4].y,
     
      quarters: dataSet[4].quarters
    }, {
      x: "2016",
      y: dataSet[5].y,
     
      quarters: dataSet[5].quarters
    }];
  
    return dataYearSeries
  }
  
    const stato =  {

        options: {
          chart: {
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            },
          },
          labels: [],
          title: {
            text: ''
          },
          stroke: {
            width: 0
          },
          fill: {
            opacity: 0.4,
            colors:['#0063c0','#0070c0' ,'#008ac0' ,'#0083c0']
          },
          markers: {
            size: 0
          }
        },
        series: [{
            // name: 'Series 1',
            data: [80, 50, 30, 40],
        }, {
            // name: 'Series 2',
             data: [20, 30, 40, 80],
        }, {
            // name: 'Series 3',
             data: [50, 80, 40, 30],
        },  
        {data: [30, 50 ,80, 40]}

    ],
       
        seriesYear: [{
          data: makeData()
        }],
        chartOptionsYear: {
          chart: {
            id: 'barYear',
            height: 400,
            width: '100%',
            type: 'bar',
          },
          plotOptions: {
            bar: {
              distributed: true,
              horizontal: true,
              barHeight: '75%',
              dataLabels: {
                position: 'bottom'
              }
            }
          },
          dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
              colors: ['#fff']
            },
            formatter: function (val, opt) {
              return opt.w.globals.labels[opt.dataPointIndex]
            },
            offsetX: 0,
            dropShadow: {
              enabled: true
            }
          },
          states: {
            normal: {
              filter: {
                type: 'desaturate'
              }
            },
            active: {
              allowMultipleDataPointsSelection: true,
              filter: {
                type: 'darken',
                value: 1
              }
            }
          },
          tooltip: {
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function (val, opts) {
                  return opts.w.globals.labels[opts.dataPointIndex]
                }
              }
            }
          },
          title: {
            text: 'Yearly Results',
            offsetX: 15
          },
          subtitle: {
            text: '(Click on bar to see details)',
            offsetX: 15
          },
          yaxis: {
            labels: {
              show: false
            }
          }
        },
      }
      
    
      return (
        


  
        <ApexCharts options={stato.options} series={stato.series}  type="radar" height="420"></ApexCharts>
    
          


      );
    }
  