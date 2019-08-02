import React from 'react';
import "./HourlyForecast.css";

const TwoHourlyForecast = (props) => {

    return (

        <div >
            <br/><br/>
            <h4 className="abc">3-Hourly Forecast</h4>
            <table className="table table-dark ">
                
                
                
                <tr>
                    
               <td> 
                   <h3>{((props.temperature.list[8].main.temp_min)-273).toFixed(2)}&#8451;</h3> </td>
            <td><h3>{((props.temperature.list[9].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[10].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[11].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[12].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[13].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[14].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[15].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
                </tr>
            </table>
           

        </div>
    );

}

export default TwoHourlyForecast;