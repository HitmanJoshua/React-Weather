import React from 'react';
import Header from '../Header/Header.react';
import HourlyForecast from '../HourlyForecast/HourlyForecast.react';
import TwoHourlyForecast from '../HourlyForecast/TwoHourlyForecast.react';
import ThreeHourlyForecast from '../HourlyForecast/ThreeHourlyForecast.react';
import FourHourlyForecast from '../HourlyForecast/FourHourlyForecast.react';
import FiveHourlyForecast from '../HourlyForecast/FiveHourlyForecast.react';
import DailyForeCast from '../DailyForeCast/DailyForeCast.react';
import {Route, Switch} from 'react-router-dom';
import './MainPage.css';
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'initial value',
            temperature :{},
            loaded : false,            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange =(event) => {
        this.setState({
            city : event.target.value
        } )
       
      }

      handleSubmit() {
          console.log("Submit called");
            let url ="http://api.openweathermap.org/data/2.5/forecast?q="+this.state.city+"&appid=2d3a09ac0327183aa221e1721d628a0c";

        fetch(url).then(resp => resp.json()).then(temperature => {
            this.setState({temperature:temperature,loaded:true})
        }).catch(err=>(alert("Enter a valid city")));
      }
      

    render() {
        
        

        if(!this.state.loaded )
        {
            return(
                <div className="Jumbotron">
                    
                    <Header heading={"Weather Application!"}></Header>
                    {/* <label htmlFor="city">City</label> */}
                    <h1 className="display-4">Enter Your City Name </h1>
                    <br/>
                    <input  className="form-control mr-sm-2"placeholder="Search" name='city' onChange={this.handleChange}/>
                    {/* <br/> */}
                    <button className="btn btn-success" onClick={this.handleSubmit}>Search Weather Forecast</button>
                    
                </div>
            );
        }
        
        else
        {
            return(
                <div className="Jumbotron">
                   
                    
                    <Header heading={"Weather Application!"}></Header>
                    <h1>Data For Your City !!</h1>
                    <h4>(Click on the cards for that day's hourly forecast)</h4>
                    {/* <label htmlFor="city">City</label> */}
                    <input  className="form-control mr-sm-2" name='city' onChange={this.handleChange}/>
                    <button  className="btn btn-success" onClick={this.handleSubmit}>Search Weather Forecast</button>
                    <Switch>
                        {/* <Route exact path ="/" component = {MainPage}/> */}
                        <Route path="/hourly" render={(props) => <HourlyForecast temperature={this.state.temperature} />} />
                        <Route path="/twohourly" render={(props) => <TwoHourlyForecast temperature={this.state.temperature} />} />
                        <Route path="/threehourly" render={(props) => <ThreeHourlyForecast temperature={this.state.temperature} />} />
                        <Route path="/fourhourly" render={(props) => <FourHourlyForecast temperature={this.state.temperature} />} />
                        <Route path="/fivehourly" render={(props) => <FiveHourlyForecast temperature={this.state.temperature} />} />
                    </Switch>
                    <DailyForeCast temperature={this.state.temperature}></DailyForeCast>
                                       
                </div>
            );
        }
    }
}




export default MainPage;