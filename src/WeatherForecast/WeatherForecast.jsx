import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './WeatherForecast.css';

const WeatherForecast = ({ url }) => {
    const [current, setCurrent] = useState(null);
    const [place, setPlace] = useState('Trichy');

    // Function to fetch weather data
    async function apiCall() {
        try {
            const res = await fetch(`${url}?key=6ddd5e82bc544b8f93794446241511&q=${place}&aqi=yes`);
            const data = await res.json();
            setCurrent(data);
            console.log(data.location);
            console.log(data.current);
            
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    // UseEffect to fetch data on `url` or `place` change
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            apiCall();
        }, 500); // Debounce API calls to prevent excessive requests

        return () => clearTimeout(delayDebounce);
    }, [url, place]);

    return (
        <div>
            <div className="label">
                <label htmlFor="Place">Place</label>
                <input
                    type="text"
                    value={place} // Bound to `place` state
                    onChange={(e) => setPlace(e.target.value)} // Update `place` on input change
                />
            </div>
            {current && current.location ? (
                <div>
                    <h2>Weather in {current.location.name}</h2>
                    <img src={current.current.condition.icon} alt="" />
                    <p>Temperature: {current.current.temp_c}°C</p>
                    <p>Condition: {current.current.condition.text}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

WeatherForecast.propTypes = {
    url: PropTypes.string.isRequired, // Changed to `string`
};

export default WeatherForecast;
