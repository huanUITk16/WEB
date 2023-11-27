const speedometerTemperature = async (temperature) => {
    Highcharts.chart('container', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: '80%'
        },
    
        title: {
            text: 'Temperature'
        },
    
        pane: {
            startAngle: -90,
            endAngle: 89.9,
            background: null,
            center: ['50%', '75%'],
            size: '110%'
        },
    
        // the value axis
        yAxis: {
            min: 0,
            max: 100,
            tickPixelInterval: 72,
            tickPosition: 'inside',
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
            tickLength: 20,
            tickWidth: 2,
            minorTickInterval: null,
            labels: {
                distance: 20,
                style: {
                    fontSize: '14px'
                }
            },
            lineWidth: 0,
            plotBands: [{
                from: 0,
                to: 40,
                color: '#55BF3B', // green
                thickness: 20
            }, {
                from: 40,
                to: 70,
                color: '#DDDF0D', // yellow
                thickness: 20
            }, {
                from: 70,
                to: 100,
                color: '#DF5353', // red
                thickness: 20
            }]
        },
    
        series: [{
            name: 'Temperature',
            data: [temperature],
            tooltip: {
                valueSuffix: ' °C'
            },
            dataLabels: {
                format: '{y} °C',
                borderWidth: 0,
                color: (
                    Highcharts.defaultOptions.title &&
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || '#333333',
                style: {
                    fontSize: '16px'
                }
            },
            dial: {
                radius: '80%',
                backgroundColor: 'gray',
                baseWidth: 12,
                baseLength: '0%',
                rearLength: '0%'
            },
            pivot: {
                backgroundColor: 'gray',
                radius: 6
            }
    
        }]
    
    });
}

const speedometerHumidity = async (temperature) => {
    Highcharts.chart('container2', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: '80%'
        },
    
        title: {
            text: 'Humidity'
        },
    
        pane: {
            startAngle: -90,
            endAngle: 89.9,
            background: null,
            center: ['50%', '75%'],
            size: '110%'
        },
    
        // the value axis
        yAxis: {
            min: 0,
            max: 100,
            tickPixelInterval: 72,
            tickPosition: 'inside',
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
            tickLength: 20,
            tickWidth: 2,
            minorTickInterval: null,
            labels: {
                distance: 20,
                style: {
                    fontSize: '14px'
                }
            },
            lineWidth: 0,
            plotBands: [{
                from: 0,
                to: 40,
                color: '#55BF3B', // green
                thickness: 20
            }, {
                from: 40,
                to: 70,
                color: '#DDDF0D', // yellow
                thickness: 20
            }, {
                from: 70,
                to: 100,
                color: '#DF5353', // red
                thickness: 20
            }]
        },
    
        series: [{
            name: 'Humidity',
            data: [temperature],
            tooltip: {
                valueSuffix: ' %'
            },
            dataLabels: {
                format: '{y} %',
                borderWidth: 0,
                color: (
                    Highcharts.defaultOptions.title &&
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || '#333333',
                style: {
                    fontSize: '16px'
                }
            },
            dial: {
                radius: '80%',
                backgroundColor: 'gray',
                baseWidth: 12,
                baseLength: '0%',
                rearLength: '0%'
            },
            pivot: {
                backgroundColor: 'gray',
                radius: 6
            }
    
        }]
    
    });
}

const speedometerAQI = async (temperature) => {
    Highcharts.chart('container3', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: '80%'
        },
    
        title: {
            text: 'AQI (Air Quality Index)'
        },
    
        pane: {
            startAngle: -90,
            endAngle: 89.9,
            background: null,
            center: ['50%', '75%'],
            size: '110%'
        },
    
        // the value axis
        yAxis: {
            min: 0,
            max: 500,
            tickPixelInterval: 72,
            tickPosition: 'inside',
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
            tickLength: 20,
            tickWidth: 2,
            minorTickInterval: null,
            labels: {
                distance: 20,
                style: {
                    fontSize: '14px'
                }
            },
            lineWidth: 0,
            plotBands: [{
                from: 0,
                to: 50,
                color: '#55BF3B', // green
                thickness: 20
            }, {
                from: 50,
                to: 100,
                color: '#DDDF0D', // yellow
                thickness: 20
            }, {
                from: 100,
                to: 150,
                color: '#FF8C00', // orange
                thickness: 20
            }, {
                from: 150,
                to: 200,
                color: '#FF0000', // red
                thickness: 20
            }, {
                from: 200,
                to: 300,
                color: '#B22222', // Brown
                thickness: 20
            }, {
                from: 300,
                to: 500,
                color: '#800000', // Dark Brown
                thickness: 20
            }]
        },
    
        series: [{
            name: 'AQI',
            data: [temperature],
            tooltip: {
                valueSuffix: ' AQI'
            },
            dataLabels: {
                format: '{y} AQI',
                borderWidth: 0,
                color: (
                    Highcharts.defaultOptions.title &&
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || '#333333',
                style: {
                    fontSize: '16px'
                }
            },
            dial: {
                radius: '80%',
                backgroundColor: 'gray',
                baseWidth: 12,
                baseLength: '0%',
                rearLength: '0%'
            },
            pivot: {
                backgroundColor: 'gray',
                radius: 6
            }
    
        }]
    
    });
}
  