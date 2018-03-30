import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

// register theme object
var colorPalette =[ "#106BA3", "#ffaa00", "#589233", "#8AB255", "#BBD18A", "#EAF0D2", "#D8EEEC", "#95CACB", "#60A2B3", "#3A77A3"];
export const TEXT_COLOR = '#d2d2d2';
echarts.registerTheme('dark', {
  backgroundColor: 'rgba(51,51,51,0.425)',
  color:colorPalette,
  title: {    
    left:10,
    top:10,
    textStyle:{
        color:TEXT_COLOR
    }
  },          
  legend: {
    textStyle: {
        color: "white"
    }
    },
  textStyle: {
    color:TEXT_COLOR
    }
    
});



class EChart extends Component {
    render() {
        const {options, ...rest} = this.props;
        return (
            <ReactEcharts
                option={this.props.options}
                notMerge={true}                
                lazyUpdate={true} 
                theme="dark"
                {...rest}
                />
        );
    }
}

EChart.propTypes = {
    options:PropTypes.object //E-Charts options
}

export default EChart;