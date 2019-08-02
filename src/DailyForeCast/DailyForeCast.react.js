import React from 'react';
import {Link} from 'react-router-dom';
import './DailyForeCast.css';


const DailyForeCast = (props) => {

    return (
        <div >
            {/* <Link to = '/hourly'><h3> Click Here For Hourly ForeCast !!!</h3> </Link> */}
            <div className="container">
            <div className="list-group list-group-horizontal-sm" >
                {/* <h3>Click on the cards for that day's Hourly ForeCast</h3><br/> */}
                <div className="card" >
                    <h3>Day1 (Today)</h3>
                    <Link to = '/hourly'>
                        {/* <Link to = '/hourly'>  </Link> */}
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl7zamdK8LRyyQvYOWn64p77sLW-Y0QPT6flVRROWNorFn-eIaQ" alt="sunny climate" />
                    <div >
                        <span >
                            <p >Min. {((props.temperature.list[0].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p  >Max. {((props.temperature.list[0].main.temp_max)-273).toFixed(2)}&#8451;</p>
                        </span>
                    </div>
                    </Link>
                </div>

                <div className="card">
                    <h3>Day 2</h3>
                    <Link to = '/twohourly'>
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxSKCpUJXMAgod1AyyrLB2iuNKYYmAsh6zWrtz2iaa7UYAjYzaA" alt="sunny climate" />
                    <div >
                        <span>
                            <p  >Min. {((props.temperature.list[8].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p  >Max. {((props.temperature.list[8].main.temp_max)-273).toFixed(2)}&#8451;</p>
                            </span>
                    </div>
                    </Link>
                </div>

                <div className="card">
                    <h3>Day 3</h3>
                    <Link to = '/threehourly'>
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl7zamdK8LRyyQvYOWn64p77sLW-Y0QPT6flVRROWNorFn-eIaQ" alt="rainy climate" />
                    <div >
                        <span>
                            <p  >Min. {((props.temperature.list[16].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p >Max. {((props.temperature.list[16].main.temp_max)-273).toFixed(2)}&#8451;</p>
                        </span>
                    </div>
                    </Link>
                </div>

                <div className="card">
                    <h3>Day 4</h3>
                    <Link to = '/fourhourly'>
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl7zamdK8LRyyQvYOWn64p77sLW-Y0QPT6flVRROWNorFn-eIaQ" alt="rainy climate" />
                    <div >
                        <span >
                            <p >Min. {((props.temperature.list[24].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p >Max. {((props.temperature.list[24].main.temp_min)-273).toFixed(2)}&#8451;</p>
                        </span>
                    </div>
                    </Link>
                </div>

                <div className="card">
                    <h3>Day 5</h3>
                    <Link to = '/fivehourly'>
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxSKCpUJXMAgod1AyyrLB2iuNKYYmAsh6zWrtz2iaa7UYAjYzaA" alt="sunny climate" />
                    <div>
                        <span >
                            <p >Min. {((props.temperature.list[32].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p  >Max. {((props.temperature.list[32].main.temp_min)-273).toFixed(2)}&#8451;</p>
                        </span>
                    </div>
                    </Link>
                </div>
            </div>
           </div>
            </div>
     );

}


// let Temp = PropTypes.shape({
//     temp: PropTypes.number.isRequired
// })

// DailyForeCast.propTypes = {
//     donorList: PropTypes.arrayOf(Temp).isRequired
// }



export default DailyForeCast;