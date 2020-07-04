import React, { Component } from 'react';
import Loggin, { authenticationService } from '../../Loggin';
import Chart from '../charts/line_area'
import Chato from 'react-apexcharts'
import ConsoleHelper from '../../../helper/ConsoleHelper'


class results_nback extends Component {
   
    constructor(props) {
        super(props);
        this.updateCharts = this.updateCharts.bind(this)
        this.state =  {
            optionsBar: {
                chart: {
                  stacked: true,
                  stackType: '100%',
                  toolbar: {
                    show: false
                  }
                },
                plotOptions: {
                  bar: {
                    horizontal: true,
                  },
                },
                dataLabels: {
                  dropShadow: {
                    enabled: true
                  }
                },
                stroke: {
                  width: 0,
                },
                xaxis: {
                  categories: ['Fav Color'],
                  labels: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false
                  }
                },
                fill: {
                  opacity: 1,
                  type: 'gradient',
                  gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0.35,
                    gradientToColors: undefined,
                    inverseColors: false,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [90, 0, 100]
                  },
                },
        
                legend: {
                  position: 'bottom',
                  horizontalAlign: 'right',
                }
              },
              seriesBar: [{
                name: 'blue',
                data: [32]
              }, {
                name: 'green',
                data: [41]
              }, {
                name: 'yellow',
                data: [12]
              }, {
                name: 'red',
                data: [65]
              }],
        currentUser: authenticationService.currentUserValue,
        TRHIT:'',
        TRFA:'',
        options: {
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
          colors: ['#77B6EA','#0070c0'],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Tasa de Aciertos y de Rechazos acertados',
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
              text: 'Aciertos(Hit, Correct Rejection)'
            },
            min: 0.0,
            max: 1.0
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
      ],
      options2: {
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
        colors: [ '#000000','#4e4b4b'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Tasa de Falsas alarmas y de Omisiones',
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
            text: 'Fallos(False Allarm, Ommission)'
          },
          min: 0,
          max: 500
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
      options3: {
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
        colors: [ '#000000','#4e4b4b'],
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
          max: 500
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
    series2: [
   
      {
        name: "FA",
        data: [1,4,6,8,2]
      },
      {
        name: "OM",
        data: [1,9,6,9,2]
      }
    ],
    series3: [
   
        {
          name: "TRHIT",
          data: [1,4,6,8,2]
        },
        {
          name: "TRFA",
          data: [1,9,6,9,2]
        }
      ],
    }
}
updateCharts() {
    const max = 90;
    const min = 30;
    const newBarSeries = [];


    this.state.seriesBar.map((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (180 - min + 1)) + min
      })
      newBarSeries.push({ data, name: s.name })
    })


    this.setState({
      seriesBar: newBarSeries,
    })
  }

componentWillMount() {

    ConsoleHelper(this.state.currentUser.token, this.state.currentUser.usuario)
    fetch(`https://young-shore-87060.herokuapp.com/n-back-Rsults`, {
    method: 'get',
    headers: new Headers ({token: this.state.currentUser.token, id: this.state.currentUser.usuario.id})
  }).then(res => res.json())
    .then((datas) => {
      ConsoleHelper(this.state.series)
      let ser = []
      let ser1 = []
      let ser2 = []
      let ser3 = []
      let TRHITo = []
      let TRFAo = []
      

      try{
        Object.keys(datas.usuario.exp.accuracyXblockHits).map(blocks => {
            ConsoleHelper(blocks)
            ser.push(Number(Math.round((datas.usuario.exp.accuracyXblockHits[blocks]/6)+'e2')+'e-2'))
            ser1.push(Number(Math.round((datas.usuario.exp.accuracyXblockCr[blocks]/14)+'e2')+'e-2'))
            ser2.push(Number(Math.round((datas.usuario.exp.failsXblockOm[blocks]/6)+'e2')+'e-2'))
            ser3.push(Number(Math.round((datas.usuario.exp.failsXblockFa[blocks]/14)+'e2')+'e-2'))
            TRHITo.push((datas.usuario.exp.TRHIT[blocks]*-1)/datas.usuario.exp.accuracyXblockHits[blocks])
            TRFAo.push((datas.usuario.exp.TRFA[blocks]*-1)/datas.usuario.exp.failsXblockFa[blocks])
        })
        ConsoleHelper(TRHITo)
        this.setState({series:[{data:ser},{data:ser1} ], series2:[{data:ser3}, {data:ser2}],series3:[{data:TRHITo}, {data:TRFAo}]})
        this.setState({})
      }catch{
        window.alert("Parece que tu llave de seguridad ha caducado, ¡sal y vuelve a entrar a la aplicación para poder visualizar tus resultados!"); 
        window.location.href = "/" 
      }

      
      
      
    })
}


   


  render() {
 
    ConsoleHelper(authenticationService.currentUserValue) 
    return (
        <div>
<div style={{flexDirection:'row', display:'flex', justifyContent:'center', width:'100%'}}>
   
    <div style={{flexDirection:'row', display:'flex', justifyContent:'center', marginTop:'200px', marginRight:'30px',width:'30%', height:'60%'}}>


     <Chart optiones={this.state.options} series={this.state.series} ></Chart>
     </div>
    <div style={{flexDirection:'row', display:'flex', justifyContent:'center', marginTop:'200px',marginLeft:'30px', width:'30%', height:'60%'}}>

     <Chart optiones={this.state.options} series={this.state.series2} ></Chart>
     
  </div>
  </div>

<div style={{flexDirection:'row', display:'flex', margin:'auto', width:'60%', height:'60%'}}>
<Chart optiones={this.state.options2} series={this.state.series3} ></Chart>
</div>

<div className="col percentage-chart">
            <Chato options={this.state.optionsBar} height={140} series={this.state.seriesBar} type="bar" width={500} />
          </div>

</div>
    );
  }
}

export default results_nback;