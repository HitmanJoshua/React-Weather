import React from 'react';
import "./HourlyForecast.css";

const FourHourlyForecast = (props) => {

    return (

        <div >
            <br/><br/>
            <h4 className="abc">3-Hourly Forecast</h4>
            <table className="table table-dark ">
                
                
                
                <tr>
                    
               <td> 
                   <h3>{((props.temperature.list[24].main.temp_min)-273).toFixed(2)}&#8451;</h3> </td>
            <td><h3>{((props.temperature.list[25].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[26].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[27].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[28].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[29].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[30].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[31].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
                </tr>
            </table>
           

        </div>
    );

}

export default FourHourlyForecast;