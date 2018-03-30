import React from 'react';
import WeatherIcon from '../WeatherIcon';
import moment from 'moment';

const DAY_IDX_MAP = {
    '1':'MON',
    '2':'TUE',
    '3':'WED',
    '4':'THU',
    '5':'FRI',
    '6':'SAT',
    '0':'SUN',
}
const WeatherForecast = ({forecast = []}) => {
    
    return (
        <div className="d-flex wrap justify-content-around">            
            {forecast.map((f,key) => <div key={key} className="">
                <h4 className="mb-0">{DAY_IDX_MAP[f.day]}</h4>
                <div>                                 
                    <WeatherIcon type={f.type} style={{width:50, height:50}}/>
                </div>
                <h4>{f.temp}<i className="ml-md-1 wi wi-celsius" /></h4>
            </div>)}
        </div>
    )
};

WeatherForecast.defaultProps = {
    forecast:[
        {type:'clear-day', temp:32.1, day:moment().add(1,'d').day()},
        {type:'wind', temp:30.1, day:moment().add(2,'d').day() },
        {type:'cloudy-day', temp:29.1, day:moment().add(3,'d').day()},
        {type:'cloudy-day', temp:29.8, day:moment().add(4,'d').day()},
        {type:'clear-day', temp:32.1, day:moment().add(5,'d').day()},        
        {type:'cloudy-day', temp:29.1, day:moment().add(6,'d').day()},            
    ]
}

export default WeatherForecast;