import React from "react";
import Card from '@material-ui/core/Card';

function CWeatherPanel({weather}) {

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
        <Card elevation={0}>
        <p style={{paddingTop:10}}>{iconDisplay(weather)} Currently: {weather.weather[0].main}</p>
        <p style={{paddingBottom:10}}>🌡 Temperature: {weather.main.temp}°C</p>
        </Card>
        </div>
    )
}

export default CWeatherPanel;