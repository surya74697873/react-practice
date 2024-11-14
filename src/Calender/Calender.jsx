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
    console.log(currentDate);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setFirstDay(new Date(year, month, 1).getDay());
    setLastDate(new Date(year, month + 1, 0).getDate());
  }, [currentDate]);

  function handleMonth(value) {
    let month = months.indexOf(value);
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), month, 1));
  }

  function handleYear(value) {
    let year = value;
    setCurrentDate((prevDate) => new Date(year, prevDate.getMonth() + 1, 1));
  }

  function increaseMonth() {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  }

  function decreaseMonth() {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  }

  function isToday(index) {
    const today = new Date();
    return (
      today.getDate() === index - firstDay + 1 &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  }

  return (
    <div className="Calender">
      <div className="Header">
        <button id="left" onClick={decreaseMonth}></button>
        <select
          name="months"
          id="months"
          onChange={(e) => handleMonth(e.target.value)}
          value={months[currentDate.getMonth()]}
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
          value={currentDate.getFullYear()}
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
        <button id="right" onClick={increaseMonth}></button>
      </div>
      <div className="Dates">
        {days.map((day, index) => (
          <div className="Day" key={index}>
            {day}
          </div>
        ))}
        {[...Array(lastDate + firstDay <= 35 ? 35 : 42)].map((_, index) => (
          <div key={index} className={`Date ${isToday(index) && "Today"}`}>
            {firstDay <= index && lastDate + firstDay > index
              ? index - firstDay + 1
              : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calender;
