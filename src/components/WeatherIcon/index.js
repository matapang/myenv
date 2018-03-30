import React from 'react';
import PropTypes from 'prop-types';
import Skycons from 'react-skycons'

export const WeatherIconType = {
    "clear-day":"CLEAR_DAY",
    "cloudy-day":'PARTLY_CLOUDY_DAY',
    "cloudy-night":"PARTLY_CLOUDY_NIGHT",
    "rain":"RAIN",
    "wind":"WIND"
};

const WeatherIcon = ({type, style, className}) => {
    return(
        <div>
            <Skycons 
                className={className}
                style={style}
                color='#00a8cc' 
                icon={WeatherIconType[type]} 
                autoplay={true}
            />
        </div>
        )
        
}

WeatherIcon.defaultProps ={
    style:{width:120, height:100}
}

WeatherIcon.propTypes = {
    type:PropTypes.oneOf(Object.keys(WeatherIconType))
}

export default WeatherIcon;