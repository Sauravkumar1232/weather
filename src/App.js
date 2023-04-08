import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";




function App() {
  
  const[data,setData] = useState({});
  const[location,setLocation] = useState('Delhi');

  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ec46e9a52c98f9c142eae8d1fe9febc5`;

  const searchLocation =(event) =>{
    if(event.key==="Enter"){
      axios.get(url).then((response)=>{
      setData(response.data);
      console.log(response.data);
    })
  }
}
  return (
    <>
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event=> setLocation(event.target.value)}
        placeholder='Enter Location'
        onKeyDown={searchLocation}
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main?  <h1>{data.main.temp}</h1> : null}
           
          </div>
          <div className="discription">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>56F</p>
            <p className='bold'>Feels Like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p className='bold'>Humidity</p>
          </div>
          <div className="wind">
           <p>12MPH</p>
           <p className='bold'>Wind Speed</p>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
