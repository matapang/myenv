import React, { PureComponent } from 'react';

import WeatherSummary from '../../components/WeatherSummary';
import WeatherForecast from '../../components/WeatherForecast';
import TideSunsetChart from '../../components/Charts/TideSunsetChart';

import PSISummary from '../../components/PSISummary';
import Card from '../../components/Card';
import TideTable from '../../components/TideTable';
import GaugeChart from '../../components/Charts/GaugeChart';

class Dashboard extends PureComponent {  
  state ={ 
    toggle:false
  }
  render() {
    return (
        <div className="container-fluid mt-2"> 
            <div className="row">
              <div className="col-md-2">
                  <Card >
                    <WeatherSummary  />                         
                  </Card>                  
              </div>
              <div className="col-md-5">
                <Card>
                  <WeatherForecast/> 
                </Card>
              </div>
              <div className="col-md-5">
                <Card >
                  <PSISummary/>
                </Card>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-12">
                <TideSunsetChart className="fill mt-2 pt-elevation-2" style={{minHeight:400}}/>
              </div>              
            </div>
            <div className="row justify-content-between mt-2">
              <div className="col-md-3 mb-2">
                <Card>
                  <h2>Today's Tide Reading</h2>
                   <TideTable/>     
                </Card>
              </div>
              <div className="col-md-9 d-flex wrap">
                <div className="col-md mb-2 p-0">                                   
                  <GaugeChart value={4} min={0} max={12} split={3} formatter="{c}" title="UV Index"/>
                </div>
                <div className="col-md  mb-2  p-0">                                   
                  <GaugeChart value={9} min={0} max={20}  split={4} formatter="{c} km/h" title="Wind" subtitle="Km/h"/>
                </div>
                <div className="col-md  mb-2  p-0">                                   
                  <GaugeChart value={1.2} min={0} max={3} split={4} formatter="{c} mm" title="Rain" subtitle="mm"/>
                </div>         
              </div>
            </div>            
        </div>
    );
  }
}

export default Dashboard;
