function DWeatherPanel({hWeather}) {
    
    return (       
        <div>
        <h2>Daily Forecast</h2>
        {hWeather.daily.map((weather,index) => (
        <p>In {index} Days: {weather.weather[0].main}, {weather.temp.day}°C</p>))}
        </div>
    )
}

export default DWeatherPanel;