import PropTypes from "prop-types";
import "./WeatherForecast.css";

import { IoMdSearch } from "react-icons/io";

import { CiLocationOn, CiCalendarDate } from "react-icons/ci";

import { TbTemperatureCelsius } from "react-icons/tb";

import { BsEye, BsWater, BsThermometer, BsWind } from "react-icons/bs";

import Oval from "react-loading-icons/dist/esm/components/oval";

import { useEffect, useState } from "react";

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WeatherForecast = ({ url, apiKey }) => {
  const [data, setData] = useState(null);
  const [place, setPlace] = useState("Trichy");
  const [today, setToday] = useState(new Date());
  const [load, setLoad] = useState(false);

  async function apiCall() {
    setLoad(true);
    const res = await fetch(`${url}?key=${apiKey}&q=${place}&aqi=yes`);
    if (res.ok) {
      const obj = await res.json();
      setData(obj);
      setPlace(obj.location.name);
    } else {
      window.alert("City Not Found");
    }
    setLoad(false);
  }

  useEffect(() => {
    apiCall();
    const timeout = setTimeout(() => console.log("delayed"), 1500);
    setToday(new Date());
    return () => {
      clearTimeout(timeout);
      console.log("cleaned");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey, url]);

  return (
    <div className="WeatherForecast oswald-700">
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search for a Location...."
          onChange={(e) => setPlace(e.target.value)}
        />
        <button className="SearchIcon" onClick={apiCall}>
          <IoMdSearch strokeWidth={"10px"} size={"1.3em"} />
        </button>
      </div>
      {!load && data ? (
        <div className="WeatherDetails">
          <div className="Location">
            <CiLocationOn size={"1.5em"} strokeWidth={"1px"} />
            <span>
              {data.location.name}/{data.location.region}/
              {data.location.country}
            </span>
          </div>
          <div className="Date">
            <CiCalendarDate size={"1.5em"} strokeWidth={"1px"} />
            {Days[today.getDay()]}, {today.getDate()} {Months[today.getMonth()]}{" "}
            {today.getFullYear()}
          </div>
          <div className="Temperature">
            <img
              src={data.current.condition.icon}
              alt={data.current.condition.text}
            />
            <div className="Celcius">
              <span>{data.current.temp_c}</span>{" "}
              <TbTemperatureCelsius
                size={"3em"}
                strokeWidth={"3px"}
                className="cle"
              />
            </div>
            <span>{data.current.condition.text}</span>
          </div>
          <div className="Metrics">
            <div id="first">
              <div>
                <BsEye className="block" /> <span>visiblity</span>{" "}
                <span>{data.current.vis_km} km</span>
              </div>
              <div>
                <BsWater className="block" /> <span>Humidity</span>{" "}
                <span>{data.current.humidity} %</span>
              </div>
            </div>
            <div id="second">
              <div>
                <BsThermometer className="block" /> <span>Feelslike</span>{" "}
                <span>{data.current.feelslike_c}</span> &#8451;
              </div>

              <div>
                <BsWind className="block" /> <span>Wind</span>{" "}
                <span>{data.current.wind_kph} kph</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="WeatherDetails"
          style={{ display: "grid", placeItems: "center" }}
        >
          <Oval stroke="white" strokeWidth={"5px"} />
        </div>
      )}
    </div>
  );
};

WeatherForecast.propTypes = {
  url: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default WeatherForecast;
