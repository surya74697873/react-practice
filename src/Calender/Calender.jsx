import { useState } from "react";
import "./Calender.css";

const months = [
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

const days = ["Sun", "Mon", "Tue", "Wed", "Thrs", "Fri", "Sat"];

function Calender() {

  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <div className="Calender">
      <div className="Header">
        <button id="left">
        </button>
        <select name="months" id="months">
          {months.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select name="years" id="years">
          <option value="2024">2024</option>
        </select>
        <button id="right"></button>
      </div>
      <div className="Days">
          {days.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
      Calender
      <div className="Dates">
        
      </div>
    </div>
  );
}

export default Calender;
