import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EChart, {TEXT_COLOR} from './EChart';



class GaugeChart extends Component {
    render() {
        const {title, subtitle, min, max, split, formatter, value} = this.props;
        const option = {  
            title: {
                text:title,   
                subtext:subtitle            
            },              
            tooltip : {
                formatter
            },       
            series:   {    
                    min,
                    max,
                    splitNumber:split,        
                    type: 'gauge',
                    detail: {formatter:'{value}', fontSize:60, color:TEXT_COLOR},                  
                    data: [{value}],
                    axisLabel:{
                        color:TEXT_COLOR,
                    }                    
            }
            
        };
        
        return (
            <EChart                
                options={option}
                {...this.props}
            />
        );
    }
}

GaugeChart.defaultProps = {
    style: {
        height:240
    }
}

GaugeChart.propTypes = {
    value:PropTypes.number,
    min:PropTypes.number,
    max:PropTypes.number,
    formatter:PropTypes.string,
    title:PropTypes.string,
}


export default GaugeChart;


