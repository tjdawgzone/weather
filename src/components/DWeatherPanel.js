import React from "react";
import Card from '@material-ui/core/Card';
import iconDisplay from "../utils/iconDisplay";

function DWeatherPanel({hWeather}) {
    
    return (       
        <div>
        {hWeather.daily.map((weather,index) => (
        <Card elevation="3" style={{marginBottom:5}}>
        <p>{iconDisplay(weather)} In {index} Days: {weather.weather[0].main}, {weather.temp.day}°C</p>
        </Card>))}
        </div>
    )
}

export default DWeatherPanel;