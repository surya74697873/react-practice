import { useEffect, useState } from "react";
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
  const [currentDate, setCurrentDate] = useState(new Date());
  const [firstDay, setFirstDay] = useState(0);
  const [lastDate, setLastDate] = useState(0);

  useEffect(() => {
    // Set the first day and last date of the current month whenever currentDate changes
    console.log(currentDate);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setFirstDay(new Date(year, month, 1).getDay());
    setLastDate(new Date(year, month + 1, 0).getDate());
  }, [currentDate]);

  function handleMonth(value) {
    let month = months.indexOf(value);
    console.log(month+"month");
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(),month,1))
  }

  function handleYear(value) {
    let year = value;
    setCurrentDate(prevDate => new Date(year,prevDate.getMonth() + 1,1))
  }

  console.log(firstDay,lastDate);
  

  return (
    <div className="Calender">
      <div className="Header">
        <button id="left"></button>
        <select
          name="months"
          id="months"
          onChange={(e) => handleMonth(e.target.value)}
        >
          {months.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name="years"
          id="years"
          onChange={(e) => handleYear(e.target.value)}
        >
          {[...Array(10)].map((_, index) => {
            let year = currentDate.getFullYear() - index + 1;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        <button id="right"></button>
      </div>
      <div className="Days">
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className="Dates">
        {[...Array((lastDate + firstDay < 35) ? 35 : 42)].map((_, index) => (
          <div key={index} className="Date">
            {firstDay <= index && lastDate + firstDay > index ? index - firstDay + 1: ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calender;
