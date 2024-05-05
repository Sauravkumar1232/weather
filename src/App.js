import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import dayjs from "dayjs";
import DatePicker from'react-date-picker';


function App() {
  curDT: new Date().toLocaleString()
  const curr = new Date();
  console.log(curr.getTime);

  const [data, setData] = useState({});
  const [location, setLocation] = useState("Delhi");
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ec46e9a52c98f9c142eae8d1fe9febc5`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };
  return (
    <>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            onKeyDown={searchLocation}
            type="search"
          />
        </div>
        <div className="container">
          <div className="top">
        
            <div className="loc"></div>
         
            <div className="location">
             
              <p>Location {data.name},</p> {data.sys? <p>{data.sys.country}</p>:null}
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
            <div className="discription">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
            <div className="date">
              {/* {data.dt & data.timezone ? (
                <p>{(new Date(data.dt*1000-(data.timezone*1000)))}</p>
              ) : "not found"} */
              }
              {/* <DatePicker onChange={onChange} value={value}/> */}
              {/* <p>Current Date And Time : {this.state.curDT}</p> */}

              <p>{console.log(curr.getTime)}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like}°C</p> : null}
              <p className="bold">Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p className="bold">Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed} km/h</p> : null}

              <p className="bold">Wind Speed</p>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default App;
