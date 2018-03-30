import React from 'react';
import numeral from 'numeraljs';
import WeatherIcon from '../WeatherIcon';
import moment from 'moment';

const WeatherSummary = ({weather = {}}) => {        
    return (
        <div className="d-flex wrap justify-content-around">            
            <WeatherIcon type={weather.type}/>            
            <div className="pl text=truncate">
                <strong>{moment().format("DD-MM-YYYY")}</strong>
                <h2>{weather.temp}<i className="ml-md-1 wi wi-celsius" /></h2>
                <p>
                    {weather.summary}
                    <br/>
                    <i className="wi wi-raindrop" style={{fontSize:16}}/><span title="Chance of rain">{numeral(weather.percentChanceRain).format("%")} </span>
                </p>
            </div>           
        </div>
    )
};

WeatherSummary.defaultProps = {
    weather:{
        type:'rain',
        summary:'Raining hard',
        temp:30.1,
        windSpeed:4,
        percentChanceRain:1
    }
}

export default WeatherSummary;