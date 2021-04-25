import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';

function HWeatherPanel({hWeather}) {
    
    return (       
        <div>
        <h2>Hourly Forecast</h2>
        {hWeather.hourly.map((weather,index) => (
        <p>In {index} hours: {weather.weather[0].main}, {weather.temp}°C</p>))}
        </div>
    )
}

export default HWeatherPanel;