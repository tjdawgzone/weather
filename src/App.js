import React, { useEffect, useState } from "react";
import CWeatherPanel from "./CWeatherPanel";
import HWeatherPanel from "./HWeatherPanel";
import DWeatherPanel from "./DWeatherPanel";
import {CircularProgress, TextField, Button, Tab, Tabs, AppBar} from '@material-ui/core';
import TabPanel from "./TabPanel";
import "./App.css";


const API_KEY = process.env.REACT_APP_api_key;
function App() {
  const [weather, setWeather] = useState(null);
  const [hWeather,setHWeather] = useState(null);
  const [zipSelect, setZipSelect] = useState(false);
  const [zipCode, setZipCode] = useState(0);
  const [pane,setPane]=useState(0);
  const [firstRun,setFirstRun]=useState(true);
  if((weather!==null)&&(firstRun===true)){
    const url2 = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url2.searchParams.append("appid", API_KEY);
    url2.searchParams.append("lat", weather.coord.lat);
    url2.searchParams.append("lon", weather.coord.lon);
    url2.searchParams.append("units", "metric");
    fetch(url2)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
          setHWeather(obj);
          setFirstRun(false);
      });
    }

    const handleChange=((e,val)=>{
      setPane(val);
    });

  if(zipSelect===false){
    return (<div class="center" style={{ textAlign: "center" }}>
    <h1>Where would you like to know the weather?</h1>
    <TextField id="standard-basic" label="Zip Code" onChange={evt=>setZipCode(evt.target.value)}/>
    <Button onClick={() => {
            const url = new URL("https://api.openweathermap.org/data/2.5/weather");
            url.searchParams.append("appid", API_KEY);
            url.searchParams.append("zip", zipCode);
            url.searchParams.append("units", "metric");
            fetch(url)
              .then((resp) => {
                return resp.json();
              })
              .then((obj) => {
                if (obj.cod === 200) {
                  setWeather(obj);
                } else {
                  setWeather(false);
                }
              });
            setZipSelect(true);
          
          
        }}>Get Weather</Button>
   </div>
    )
  }
  
  else if((weather!==null)&&(hWeather!==null)){
    console.log(weather);
    console.log(hWeather);
  return (
    <div style={{textAlign: "center" }}>
     <h1>Here's the weather in {weather.name}.</h1>
    <CWeatherPanel weather={weather}/>
    <HWeatherPanel hWeather={hWeather}/>
    <DWeatherPanel hWeather={hWeather}/>
    </div>
  );
  }
  else{
    return (
      <div class="center">
    <CircularProgress color="secondary" />
    </div>
    )
  }
}
export default App;