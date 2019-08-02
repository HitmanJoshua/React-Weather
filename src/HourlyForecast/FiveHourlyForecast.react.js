import React from 'react';
import "./HourlyForecast.css";

const FiveHourlyForecast = (props) => {

    return (

        <div >
            <br/><br/>
            <h4 className="abc">3-Hourly Forecast</h4>
            <table className="table table-dark ">
                
                
                
                <tr>
                    
               <td> 
                   <h3>{((props.temperature.list[32].main.temp_min)-273).toFixed(2)}&#8451;</h3> </td>
            <td><h3>{((props.temperature.list[33].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[34].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[35].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[36].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[37].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[38].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[39].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
                </tr>
            </table>
           

        </div>
    );

}

export default FiveHourlyForecast;