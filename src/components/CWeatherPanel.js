import React from "react";
import Card from '@material-ui/core/Card';
import iconDisplay from "../utils/iconDisplay"

function CWeatherPanel({weather}) {

    return (       
        <div>
        <Card elevation={0}>
        <p style={{paddingTop:10}}>{iconDisplay(weather)} Currently: {weather.weather[0].main}</p>
        <p style={{paddingBottom:10}}>🌡 Temperature: {weather.main.temp}°C</p>
        </Card>
        </div>
    )
}

export default CWeatherPanel;