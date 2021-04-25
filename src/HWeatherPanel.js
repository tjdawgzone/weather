import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';

function HWeatherPanel({hWeather}) {
    
    const iconDisplay = ((w)=>{
        if(w.weather[0].main==="Rain"){
            return "🌧"; 
        }
        else if(w.weather[0].main==="Clouds"){
            return "⛅️";
        }
        else if(w.weather[0].main==="Clear"){
            return "☀️";
        }
        else if(w.weather[0].main==="Snow"){
            return "🌨";
        }
        else{
            return "🌤";
        }


    })
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