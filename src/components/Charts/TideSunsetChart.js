import React, {Component} from 'react';
import EChart from './EChart';
import moment from 'moment';

const NUM_DAYS = 4;
const TOTAL_DAY_MINS = 60*24*NUM_DAYS; //4Days
const Y_MAX = 5;
//Minute Index
const DAY_SUNRISE = [19, 720*2, 720*4, 720*6]; 
const DAY_TIME = ['7:15', '7:14', '7:13', '7:15'];

 //Minute Index
const DAY_SUNSET = [19+720, 720*3+60, 720*5, 720*7];
const NIGHT_TIME = ['20:15', '20:12', '20:13', '20:10'];

var option = {  
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {            
            const data =params[0].data;            
            return data ? `${data[2]} ${data[1]} Meters`: "";
        },
        axisPointer: {
            animation: false
        }
    },
    dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'empty',
            handStyle:{color:'red'},
            start:0,
            end:30,
            //zoomLock:true,
        },
       
    ],
    xAxis: {     
        show:false, 
        splitLine: {
            show: false
        }
    },
    yAxis: {
        name:'Meters',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
        max:Y_MAX,
        nameLocation:'center'
    },
    series: [{
        name: 'Tide Level',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        smooth:true,
        data:generateTideWaveData(),        
        areaStyle: {normal: {}},
    },
    {
        name: 'Sunset/Sunrise',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        smooth:true,
        
        markPoint: {
            //animation:false,
            symbolSize:65,            
            data:generateMarkPoints(),
            label:{
             fontWeight:'bold',     
             color:'#220022',        
             show:true             
            }
        },
        markArea:{
            data:generateMarkdata()
        },
        markLine:{
            symbol:'none',
            data:generateMarkLines()
        },

        data:[TOTAL_DAY_MINS]
    }
]
};

function generateMarkPoints() {
    const markPoints = [];
    for(let idx = 0; DAY_SUNRISE.length > idx; idx++) {
        markPoints.push({coord:[DAY_SUNRISE[idx], Y_MAX], 
            value:DAY_TIME[idx] ,  
            symbol:'image://sun.png',
            label:{offset:[-2,10],          
        }})
        markPoints.push({coord:[DAY_SUNSET[idx], Y_MAX], 
            itemStyle:{color:'darkgrey'}, 
            value:NIGHT_TIME[idx],  
            symbol:'image://moon.png',  
            label:{offset:[-2,10],          
        }})
        //Date MarkPoints
        const pos = DAY_SUNSET[idx] - 300;
        markPoints.push({coord:[pos, 0], 
            itemStyle:{color:'#ffaa00'},
            value:moment().add(idx, 'd').format("DD-MM-YYYY"), 
            symbol:'roundRect', symbolSize:[100,20]  })
    }
    return markPoints;
}

function generateMarkdata() {
    return  [
        [
            {
                name: '',
                coord: [DAY_SUNRISE[0], 0]
            },
            {
                coord: [DAY_SUNSET[0], Y_MAX]
            }
        ],
        [
            {
                name: '',
                coord: [DAY_SUNRISE[1], 0]
            },
            {
                coord: [DAY_SUNSET[1], Y_MAX]
            }
        ],
        [
            {
                name: '',
                coord: [DAY_SUNRISE[2], 0]
            },
            {
                coord: [DAY_SUNSET[2], Y_MAX]
            }
        ],
        [
            {
                name: '',
                coord: [DAY_SUNRISE[3], 0]
            },
            {
                coord: [DAY_SUNSET[3], Y_MAX]
            }
        ]
    ]
}

function generateMarkLines() {
    return [
        [
            {
                name: '',
                coord: [1020, 0]
            },
            {
                coord: [1020, 5]
            }                 
        ],
        [
            {
                name: '',
                coord: [2460, 0]
            },
            {
                coord: [2460, 5]
            }                 
        ],
        [
            {
                name: '',
                coord: [3900, 0]
            },
            {
                coord: [3900, 5]
            }                 
        ],                
        [
            {
                name: '',
                coord: [5340, 0]
            },
            {
                coord: [5340, 5]
            }                 
        ]
    ]
}

function generateTideWaveData() {        
    //Sample Data Reading every 6 hours
    const TIDE_WAVE_DATA=[
        {minuteVal: 0, height:2, time:"07:00"},
        {minuteVal: 360, height:3.1, time:"13:00"},    
        {minuteVal: 720, height:0.3, time:"19:00"},    
        {minuteVal: 1080, height:2.9, time:"13:00"},    
        {minuteVal: 1440, height:1.2, time:"07:00"},    
        {minuteVal: 1800, height:3.2, time:"13:00"},    
        {minuteVal: 2160, height:0.3, time:"19:00"},    
        {minuteVal: 2520, height:2.9, time:"01:00"},    
        {minuteVal: 2880, height:1.4, time:"07:00"},    
        {minuteVal: 3240, height:3.4, time:"13:00"},    
        {minuteVal: 3600, height:0.5, time:"19:00"},    
        {minuteVal: 3960, height:3, time:"01:00"},    
        {minuteVal: 4320, height:0.5, time:"07:00"},    
        {minuteVal: 4680, height:3.1, time:"13:00"},    
        {minuteVal: 5040, height:0.28, time:"19:00"},    
        {minuteVal: 5400, height:3, time:"01:00"},  
        {minuteVal: 5759, height:0.4, time:"07:00"},      
    ]
    const tideWave = [];
    const findWave = (idx) => {
        return TIDE_WAVE_DATA.find(t=> t.minuteVal === i)
    };
    for (var i = 0; i < TOTAL_DAY_MINS; i++) {
        const tideInfo = findWave(i);
        if (tideInfo) {
            tideWave.push([i, tideInfo.height, tideInfo.time ])
        }    
    }
    return tideWave;

}

class TideSunsetChart extends Component {
    render() {
        return (
            <EChart
                options={option}
                {...this.props}
            />
        );
    }
}


export default TideSunsetChart;


