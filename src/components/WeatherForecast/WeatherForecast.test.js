import React from 'react';
import moment from 'moment'
import renderer from 'react-test-renderer';
import WeatherForecast from './index';


it('WeatherForecast should match snapshot', () => {  
    const component = renderer.create(
      <WeatherForecast  forecast={[
        {type:'clear-day', temp:32.1, day:moment().add(1,'d').day()},
        {type:'wind', temp:30.1, day:moment().add(2,'d').day() },
        {type:'cloudy-day', temp:29.1, day:moment().add(3,'d').day()},
        {type:'cloudy-day', temp:29.8, day:moment().add(4,'d').day()},
        {type:'clear-day', temp:32.1, day:moment().add(5,'d').day()},        
        {type:'cloudy-day', temp:29.1, day:moment().add(6,'d').day()},     
        ]} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
});
