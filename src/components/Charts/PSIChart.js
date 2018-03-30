import React, {Component} from 'react';
import EChart from './EChart';


const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];

const data = [[3,52],[4,49],[5,80],[6,80],[7,90],[8,52],[9,52],[10,40],[11,30],[13,49]];

const option = {
    tooltip: {
        position: [10,10],
        formatter:function(params) {
            return params.data[1] + "PSI";
        }

    },
    title: [],
    color:'#BBD18A',
    backgroundColor: 'transparent',   
    singleAxis: {        
        type: 'category',
        boundaryGap: false,
        data: hours,       
        height: "10%",
        top:20,
        axisLabel: {
            interval: 2
        }
    },
    series: 
        {
            singleAxisIndex: 0,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data:data,
            symbolSize: function (dataItem) {
                return dataItem[1] /2;
            }
        }
    ,
};




class PSIChart extends Component {
    render() {
        return (
            <EChart
                style={{height:70}}
                options={option}
                {...this.props}
            />
        );
    }
}


export default PSIChart;


