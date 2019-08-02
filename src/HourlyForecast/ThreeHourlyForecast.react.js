import React from 'react';
import "./HourlyForecast.css";

const ThreeHourlyForecast = (props) => {

    return (

        <div >
            <br/><br/>
            <h4 className="abc">3-Hourly Forecast</h4>
            <table className="table table-dark ">
                
                
                
                <tr>
                    
               <td> 
                   <h3>{((props.temperature.list[16].main.temp_min)-273).toFixed(2)}&#8451;</h3> </td>
            <td><h3>{((props.temperature.list[17].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[18].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[19].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[20].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[21].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[22].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[23].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
                </tr>
            </table>
           

        </div>
    );

}

export default ThreeHourlyForecast;