import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';
import { sizing, width } from '@material-ui/system';

function DWeatherPanel({hWeather}) {


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
        {hWeather.daily.map((weather,index) => (
        <Card elevation="3" style={{marginBottom:5}}>
        <p>{iconDisplay(weather)} In {index} Days: {weather.weather[0].main}, {weather.temp.day}°C</p>
        </Card>))}
        </div>
    )
}

export default DWeatherPanel;