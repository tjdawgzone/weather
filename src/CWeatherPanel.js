import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';

function CWeatherPanel({weather}) {
    return (       
        <div>
        <Card elevation={0}>
        <p style={{paddingTop:10}}>🌤 Currently: {weather.weather[0].main}</p>
        <p style={{paddingBottom:10}}>🌡 Temperature: {weather.main.temp}°C</p>
        </Card>
        </div>
    )
}

export default CWeatherPanel;