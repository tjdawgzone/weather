import React from "react";
import Card from '@material-ui/core/Card';

function HWeatherPanel({hWeather}) {

    return (       
        <div>
        {hWeather.hourly.map((weather,index) => (
        <Card elevation="3" style={{marginBottom:5}}>
        <p>{iconDisplay(weather)} In {index} hours: {weather.weather[0].main}, {weather.temp}°C</p>
        </Card>
        
        ))}
        </div>
    )
}

export default HWeatherPanel;