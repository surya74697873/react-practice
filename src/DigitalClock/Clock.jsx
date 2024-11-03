import { useEffect, useState } from 'react';
import './Clock.css'

const Clock = () => {

    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")
    const [ampm, setAmpm] = useState('AM')

    function convertTwoDigit(num){
        return num < 10 ? "0"+num : num;
    }

    function clockRunning() {
        let date = new Date();
        let currentHours = date.getHours();
        let currentMinutes = date.getMinutes();
        let currentSeconds = date.getSeconds();

        setHours(convertTwoDigit(currentHours % 12 || 12)); // Convert 24-hour to 12-hour format
        setMinutes(convertTwoDigit(currentMinutes));
        setSeconds(convertTwoDigit(currentSeconds));
        setAmpm(currentHours < 12 ? 'AM' : 'PM');
    }
    
    useEffect(() => {
        let interval = setInterval(clockRunning, 500)

        return () => clearInterval(interval)
    })

    return (
        <div id="container">
            <div className="hours">{hours}</div> <span>:</span>
            <div className="minutes">{minutes}</div> <span>:</span>
            <div className="seconds">{seconds}</div> <span>:</span>
            <div className="ampm">{ampm}</div>
        </div>
    );
}

export default Clock;
