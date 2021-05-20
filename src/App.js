import React, { useState } from "react";
import CWeatherPanel from "./components/CWeatherPanel";
import HWeatherPanel from "./components/HWeatherPanel";
import DWeatherPanel from "./components/DWeatherPanel";
import {CircularProgress, TextField, Button, Tab, Tabs, AppBar} from '@material-ui/core';
import TabPanel from "./components/TabPanel";
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

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
  }

  function handleChange(event, newPane) {
    setPane(newPane);
  }


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
  
  if((weather!==null)&&(hWeather!==null)){
  return (
    <div style={{textAlign: "center" }}>
     <h1>Here's the weather in {weather.name}.</h1>
    <CWeatherPanel weather={weather}/>
    <AppBar position="static" color="default">
        <Tabs style={{margin:"auto"}} value={pane} onChange={handleChange}>
          <Tab label="Hourly Weather" {...a11yProps(0)} />
          <Tab label="Daily Weather" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={pane} index={0}>
        <HWeatherPanel hWeather={hWeather}/>
      </TabPanel>
      <TabPanel value={pane} index={1}>
        <DWeatherPanel hWeather={hWeather}/>
      </TabPanel>
    </div>
  );
  }
    return (
      <div class="center">
    <CircularProgress color="secondary" />
    </div>
    )
  
}
export default App;