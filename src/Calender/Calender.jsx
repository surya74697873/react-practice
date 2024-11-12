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
  console.table(months);
  console.table(days);

  return ( <div className="Calender">
        <div className="header">
            <button id="left"></button>
            <select name="months" id="months"></select>
            <select name="years" id="years"></select>
            <button id="right"></button>
        </div>
        Calender
    </div> );
}

export default Calender;
