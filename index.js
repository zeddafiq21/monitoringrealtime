  const firebaseConfig = {
    apiKey: "AIzaSyA_w87pWu3w83HSqlfZaiWRd_HHKNkXb9w",
    authDomain: "iot-terdistribusi.firebaseapp.com",
    databaseURL: "https://iot-terdistribusi-default-rtdb.firebaseio.com",
    projectId: "iot-terdistribusi",
    storageBucket: "iot-terdistribusi.appspot.com",
    messagingSenderId: "325819777787",
    appId: "1:325819777787:web:1fbba5939f03295b95265e",
    measurementId: "G-77S5QTGYT6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  var database = firebase.database();
//   import * as Highcharts from 'highcharts';
//   import * as Dashboards from '@highcharts/dashboards';
//   Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
//   Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
  //getting reference to the data we wants
  var dataRef1 = database.ref('voltage');
  var dataRef2 = database.ref('arus');
  var dataRef3 = database.ref('daya');
  var dataRef4 = database.ref('powerfactor');
  var dataRef5 = database.ref('energi');
  var dataRef6 = database.ref('teganganpv');
  var dataRef7 = database.ref('aruspv');
  var dataRef8 = database.ref('teganganbaterai');
  var dataRef9 = database.ref('arusbaterai');
  var dataRef10 = database.ref('dayapv')
  var dataRef11 = database.ref('dayabaterai')
  var dataRef12 = database.ref('frekuensi')
  var dataRef13 = database.ref('energipv')
  var dataRef14 = database.ref('energibaterai')


$(document).ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    Highcharts.chart('container-teganganpv', {
        chart: {
            type: 'areaspline',
            animation: Highcharts.svg, 
            marginRight: 10,
            events: {
                load: function () {

                    var series = this.series[0];
                    setInterval(function () {
                        dataRef6.on('value', function(getdata1){
                            var suhu = getdata1.val();
                            var x = (new Date()).getTime(),
                            y = suhu;      // masukan data firebase tegangan
                        series.addPoint([x, y], true, true);
                        })
                        
                    }, 60000);
                }
                
            }
            
        },
        
        credits:{
            enabled :false
        },
        
        title: {
            text: 'PV Voltage'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 200
        },
        yAxis: {
            title: {
                text: 'Voltage'
            },
           
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2) +''+ 'Volt';
            }
        },
        legend: {
            enabled: true
        },
        exporting: {
            enabled: true
        },
        series: [{
            name: 'PV Voltage',
            color: 'rgba(30,144,255, 0.2)',
            data: (function () {
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -9; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        
                        y: 0//data firebase
                        
                    });
                }
                return data;
            }())
        }]
    });
    


    Highcharts.chart('container-aruspv', {
      chart: {
          type: 'areaspline',
          animation: Highcharts.svg, 
          marginRight: 10,
          events: {
              load: function () {

                  var series = this.series[0];
                  setInterval(function () {
                      dataRef7.on('value', function(getdata1){
                          var suhu = getdata1.val();
                          var x = (new Date()).getTime(),
                          y = suhu;      // masukan data firebase tegangan
                      series.addPoint([x, y], true, true);
                      })
                      
                  }, 60000);
              }
          }
      },
      credits:{
          enabled :false
      },
      
      title: {
          text: 'PV Current'
      },
      xAxis: {
          type: 'datetime',
          tickPixelInterval: 200
      },
      yAxis: {
          title: {
              text: 'Current'
          },
         
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.series.name + '</b><br/>' +
                  Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                  Highcharts.numberFormat(this.y, 2) +''+ 'Volt';
          }
      },
      legend: {
          enabled: true
      },
      exporting: {
          enabled: true
      },
      series: [{
          name: 'PV Current',
          color: 'rgba(30,144,255, 0.2)',
          data: (function () {
              var data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -9; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      
                      y: 0//data firebase
                      
                  });
              }
              return data;
          }())
      }]
  });
  
  Highcharts.chart('container-teganganbaterai', {
    chart: {
        type: 'areaspline',
        animation: Highcharts.svg, 
        marginRight: 10,
        events: {
            load: function () {

                var series = this.series[0];
                setInterval(function () {
                    dataRef8.on('value', function(getdata1){
                        var suhu = getdata1.val();
                        var x = (new Date()).getTime(),
                        y = suhu;      // masukan data firebase tegangan
                    series.addPoint([x, y], true, true);
                    })
                    
                }, 60000);
            }
        }
    },
    credits:{
        enabled :false
    },
    
    title: {
        text: 'Battery Voltage'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 200
    },
    yAxis: {
        title: {
            text: 'Voltage'
        },
       
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2) +''+ 'Volt';
        }
    },
    legend: {
        enabled: true
    },
    exporting: {
        enabled: true
    },
    series: [{
        name: 'Battery Voltage',
        color: 'rgba(30,144,255, 0.2)',
        data: (function () {
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -9; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    
                    y: 0//data firebase
                    
                });
            }
            return data;
        }())
    }]
});



Highcharts.chart('container-arusbaterai', {
  chart: {
      type: 'areaspline',
      animation: Highcharts.svg, 
      marginRight: 10,
      events: {
          load: function () {

              var series = this.series[0];
              setInterval(function () {
                  dataRef9.on('value', function(getdata1){
                      var suhu = getdata1.val();
                      var x = (new Date()).getTime(),
                      y = suhu;      // masukan data firebase tegangan
                  series.addPoint([x, y], true, true);
                  })
                  
              }, 60000);
          }
      }
  },
  credits:{
      enabled :false
  },
  
  title: {
      text: 'Battery Current'
  },
  xAxis: {
      type: 'datetime',
      tickPixelInterval: 200
  },
  yAxis: {
      title: {
          text: 'Current'
      },
     
  },
  tooltip: {
      formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
              Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
              Highcharts.numberFormat(this.y, 2) +''+ 'A';
      }
  },
  legend: {
      enabled: true
  },
  exporting: {
      enabled: true
  },
  series: [{
      name: 'Battery Current',
      color: 'rgba(30,144,255, 0.2)',
      data: (function () {
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -9; i <= 0; i += 1) {
              data.push({
                  x: time + i * 1000,
                  
                  y: 0//data firebase
                  
              });
          }
          return data;
      }())
  }]
});


Highcharts.chart('container-teganganbeban', {
  chart: {
      type: 'areaspline',
      animation: Highcharts.svg, 
      marginRight: 10,
      events: {
          load: function () {

              var series = this.series[0];
              setInterval(function () {
                  dataRef1.on('value', function(getdata1){
                      var suhu = getdata1.val();
                      var x = (new Date()).getTime(),
                      y = suhu;      // masukan data firebase tegangan
                  series.addPoint([x, y], true, true);
                  })
                  
              }, 60000);
          }
      }
  },
  credits:{
      enabled :false
  },
  
  title: {
      text: 'Load Voltage'
  },
  xAxis: {
      type: 'datetime',
      tickPixelInterval: 200
  },
  yAxis: {
      title: {
          text: 'Voltage'
      },
     
  },
  tooltip: {
      formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
              Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
              Highcharts.numberFormat(this.y, 2) +''+ 'Volt';
      }
  },
  legend: {
      enabled: true
  },
  exporting: {
      enabled: true
  },
  series: [{
      name: 'Load Voltage',
      color: 'rgba(30,144,255, 0.2)',
      data: (function () {
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -9; i <= 0; i += 1) {
              data.push({
                  x: time + i * 1000,
                  
                  y: 0//data firebase
                  
              });
          }
          return data;
      }())
  }]
});


Highcharts.chart('container-arusbeban', {
chart: {
    type: 'areaspline',
    animation: Highcharts.svg, 
    marginRight: 10,
    events: {
        load: function () {

            var series = this.series[0];
            setInterval(function () {
                dataRef2.on('value', function(getdata1){
                    var suhu = getdata1.val();
                    var x = (new Date()).getTime(),
                    y = suhu;      // masukan data firebase tegangan
                series.addPoint([x, y], true, true);
                })
                
            }, 60000);
        }
    }
},
credits:{
    enabled :false
},

title: {
    text: 'Load Current'
},
xAxis: {
    type: 'datetime',
    tickPixelInterval: 200
},
yAxis: {
    title: {
        text: 'Current'
    },
   
},
tooltip: {
    formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
            Highcharts.numberFormat(this.y, 2) +''+ 'A';
    }
},
legend: {
    enabled: true
},
exporting: {
    enabled: true
},
series: [{
    name: 'Load Current',
    color: 'rgba(30,144,255, 0.2)',
    data: (function () {
        var data = [],
            time = (new Date()).getTime(),
            i;

        for (i = -9; i <= 0; i += 1) {
            data.push({
                x: time + i * 1000,
                
                y: 0//data firebase
                
            });
        }
        return data;
    }())
}]
});



});




function random(max, min = 0) {
    return Math.floor(min + Math.random() * (max - min));
  }
  
  const boardsDaya = Dashboards.board('container-daya', {
     components: [{
      renderTo: 'kpi-22',
      type: 'KPI',
      title: 'Load Power (W)',
      value: 70,
      minFontSize: 10,
      chartOptions: {
        chart: {
          type: 'solidgauge'
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
          background: {
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
          }
        },
        yAxis: {
          min: 0,
          max: 1000
        },
        series: [{
          dataLabels: {
            enabled: true
          },
          rounded: true,
          data: [{
            innerRadius: '60%',
            outerRadius: '100%'
          }]
        }]
      }
    }, ],
    
     gui: {
     
    
      layouts: [{
        id: 'layout-1',
        rows: [{
          cells: [{
            id: 'kpi-00'
          }, {
            id: 'kpi-01'
          },
          {
            id: 'kpi-02'
          },
          {
            id: 'kpi-03'
          },
          
        ]

        },
        {
            cells: [{
              id: 'kpi-10'
            }, {
              id: 'kpi-11'
            },{
            id: 'kpi-12'
              },{
            id: 'kpi-13'
              }
              
            ]
          },
          {
            cells: [{
              id: 'kpi-20'
            }, {
              id: 'kpi-21'
            },{
            id: 'kpi-22'
              },{
            id: 'kpi-23'
              }
             
            ]
          },
          {
            cells: [{
              id: 'kpi-30'
            }, {
              id: 'kpi-31'
            },
            {
              id: 'kpi-32'
            },
            {
              id: 'kpi-33'
            },
             
            ]
          },
    
    
    
    
    ]
      }]
    },
  });
  
  
  function setValuesDaya() {
    dataRef3.on('value', function(getdata1){
     
    boardsDaya.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesDaya();
  }, 1000);

  
  const boardsTegangan = Dashboards.board('container-tegangan', {
     components: [{
      renderTo: 'kpi-20',
      type: 'KPI',
      title: 'Load Voltage (VAC)',
      value: 70,
      chartOptions: {
        chart: {
          type: 'solidgauge'
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
          background: {
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
          }
        },
        yAxis: {
          min: 0,
          max: 250
        },
        series: [{
          dataLabels: {
            enabled: true
          },
          rounded: true,
          data: [{
            innerRadius: '60%',
            outerRadius: '100%'
          }]
        }]
      }
    }, ],
    
  });
  
  
  function setValuesTegangan() {
    dataRef1.on('value', function(getdata1){
     
    boardsTegangan.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesTegangan();
  }, 1000);


  const boardsArus = Dashboards.board('container-arus', {
    components: [{
     renderTo: 'kpi-21',
     type: 'KPI',
     title: 'Load Current (A)',
     value: 1,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max: 2
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesArus() {
    dataRef2.on('value', function(getdata1){
     
    boardsArus.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesArus();
  }, 1000);


 const boardsFaktorDaya = Dashboards.board('container-faktordaya', {
    components: [{
     renderTo: 'kpi-31',
     type: 'KPI',
     title: 'Power Factor',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:1 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesFaktorDaya() {
    dataRef4.on('value', function(getdata1){
     
    boardsFaktorDaya.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesFaktorDaya();
  }, 1000);

  const boardsEnergi = Dashboards.board('container-energi', {
    components: [{
     renderTo: 'kpi-23',
     type: 'KPI',
     title: 'Load Energy (kWh)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:1 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesEnergi() {
    dataRef5.on('value', function(getdata1){
     
    boardsEnergi.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesEnergi();
  }, 1000);

  
  const boardsFrekuensi = Dashboards.board('container-frekuensi', {
    components: [{
     renderTo: 'kpi-30',
     type: 'KPI',
     title: 'Frequency (Hz)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:1 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesFrekuensi() {
    dataRef12.on('value', function(getdata1){
     
    boardsFrekuensi.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesFrekuensi();
  }, 1000);



  const boardsTeganganPV = Dashboards.board('container-teganganPV', {
    components: [{
     renderTo: 'kpi-00',
     type: 'KPI',
     title: 'PV Voltage (VDC)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:24 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesTeganganPV() {
    dataRef6.on('value', function(getdata1){
     
    boardsTeganganPV.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesTeganganPV();
  }, 1000);




  const boardsBaterai = Dashboards.board('container-baterai', {
    components: [{
     renderTo: 'kpi-10',
     type: 'KPI',
     title: 'Battery Voltage (VDC)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:24 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesBaterai() {
    dataRef8.on('value', function(getdata1){
     
    boardsBaterai.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });



    

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesBaterai();
  }, 1000);



  const boardsArusPv = Dashboards.board('container-aruspv1', {
    components: [{
     renderTo: 'kpi-01',
     type: 'KPI',
     title: 'PV Current (A)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:24 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesArusPv() {
    dataRef7.on('value', function(getdata1){
     
    boardsArusPv.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesArusPv();
  }, 1000);




  const boardsArusBaterai = Dashboards.board('container-arusbaterai1', {
    components: [{
     renderTo: 'kpi-11',
     type: 'KPI',
     title: 'Battery Current (A)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:24 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesArusBaterai() {
    dataRef9.on('value', function(getdata1){
     
    boardsArusBaterai.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesArusBaterai();
  }, 1000);


  const boardsDayaPv = Dashboards.board('container-dayapv', {
    components: [{
     renderTo: 'kpi-02',
     type: 'KPI',
     title: 'PV Power (W)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:1000 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesDayaPv() {
    dataRef10.on('value', function(getdata1){
     
    boardsDayaPv.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesDayaPv();
  }, 1000);


  const boardsDayaBaterai = Dashboards.board('container-dayabaterai', {
    components: [{
     renderTo: 'kpi-12',
     type: 'KPI',
     title: 'Battery Power (W)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:1000 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValuesDayaBaterai() {
    dataRef11.on('value', function(getdata1){
     
    boardsDayaBaterai.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValuesDayaBaterai();
  }, 1000);


  
  const boardsEnergiPV = Dashboards.board('container-energipv', {
    components: [{
     renderTo: 'kpi-03',
     type: 'KPI',
     title: 'Energy PV (WP)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:1000 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValueEnergiPV() {
    dataRef13.on('value', function(getdata1){
     
    boardsEnergiPV.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValueEnergiPV();
  }, 1000);

  const boardsEnergiBaterai = Dashboards.board('container-energibaterai', {
    components: [{
     renderTo: 'kpi-13',
     type: 'KPI',
     title: 'Energy Battery (Wh)',
     value: 0,
     chartOptions: {
       chart: {
         type: 'solidgauge'
       },
       pane: {
         startAngle: -150,
         endAngle: 150,
         background: {
           innerRadius: '60%',
           outerRadius: '100%',
           shape: 'arc'
         }
       },
       yAxis: {
         min: 0,
         max:1000 
       },
       series: [{
         dataLabels: {
           enabled: true
         },
         rounded: true,
         data: [{
           innerRadius: '60%',
           outerRadius: '100%'
         }]
       }]
     }
   }, ],
   
 });
 
 function setValueEnergiBaterai() {
    dataRef14.on('value', function(getdata1){
     
    boardsEnergiBaterai.mountedComponents.forEach(element => {
      const chart = element.component.chart,
        randomValue = getdata1.val();
  
      if (chart && chart.options.chart.type !== 'solidgauge') {
        chart.series[0].addPoint(
          randomValue,
          true,
          true
        );
      }
  
      element.component.update({
        value: randomValue
      });
    });

})

  }
  
  // Update the data every second
  setInterval(() => {
    setValueEnergiBaterai();
  }, 1000);

  

  





  





