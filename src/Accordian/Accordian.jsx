import { useState } from "react";
import data from "./Data";
import './Accordian.css'

const Accordian = () => {
  const [select, setSelect] = useState(null)

  function handleClick(id) {
    setSelect((prev) => prev === id ? null : id)
  }
  return (
    <div className="container">
      {
        data.map((element, key) => (
          <div className="qanda" key={key} onClick={() => handleClick(element.id)}>

            <div className="question">
              <p>{element.question}</p>
              <span>+</span>
            </div>

            {select === element.id ? <p className="answer">{element.answer}</p> : null}
          </div>
        ))
      }
    </div>
  );
}

export default Accordian;
