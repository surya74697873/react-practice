import PropTypes from "prop-types";
import "./WeatherForecast.css";

import { IoMdSearch } from "react-icons/io";

import { TbTemperatureCelsius } from "react-icons/tb";

import {
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";

import Oval from "react-loading-icons/dist/esm/components/oval";

const WeatherForecast = () => {
  // async function apiCall() {
  //     try {
  //         const res = await fetch(`${url}?key=${apiKey}&q=${place}&aqi=yes`);
  //         const data = await res.json();

  //     } catch (error) {
  //         console.error("Error fetching weather data:", error);
  //     }
  // }

//   return <div> Weather Data
//     <IoMdSearch />
//     <TbTemperatureCelsius />
//     <BsWater />
//     <BsEye />
//     <BsWind />
//     <BsThermometer />
//     <Oval stroke="#000000" strokeWidth={'5px'}/>
//   </div>;

    return (
        <div className="WeatherForecast">
            <div className="SearchBar">
                <input type="text" />
                <IoMdSearch size={'1.5em'}/>
            </div>
        </div>
    )
};

WeatherForecast.propTypes = {
  url: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default WeatherForecast;
