import React, {useState} from 'react';
import './App.css';
import "./index.css"

export default function App() {
  const [data, setData] =useState({}) 
  const [location, setLocation] = useState('')
  
  
const searchLocation =(event) => {
  if(event.key === "Enter"){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6443b4f79d862cfd235ddc0671169df5`)
  .then(responce => responce.json())
  .then(data => setData(data),
    console.log(data))
    setLocation('')
  }
}

  return (
    <div className="app">
      <div className="search">
        <input value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder= "Enter location"
        type="type"/>
      </div>
      <div className="container">
<div className="upper">
  <div className="location">
    <p>{data.name}</p>
  </div>
  <div className="temp">
    {data.main? <h1>{data.main.temp.toFixed()}°C</h1> : null}
  </div>
  <div className="description">
  {data.weather ? <p>{data.weather[0].main}</p>: null}
  </div>
</div>
 {data.name !== undefined && 
      <div className="lower">
        <div className="feels">
         {data.main ?  <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
          <p>Feels like </p>
        </div>
       <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        <p>Humidity</p>
        </div> 
        <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MpS</p> : null} 
          <p>Wind speed</p>
        </div>
      </div>
 }
    </div>
    </div>
  );
}

