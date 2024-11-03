import { useState } from "react";
import data from "./Data";
import './Accordian.css'

const Accordian = () => {
  const [select, setSelect] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [selectedList, setSelectedList] = useState([])

  function handleSingleSelection(id) {
    setSelect((prev) => prev === id ? null : id)
    console.log(enableMultiSelection,selectedList)
  }


  function handleMultiSelection(id){
    if(selectedList.includes(id)){
      setSelectedList(selectedList.filter((element) => element !== id))
    }
    else
      setSelectedList((prev) => [...prev,id])
  }

  function enable(){
    setEnableMultiSelection((prev) => !prev ? true : false)
    setSelectedList([])
    setSelect(null)
    console.log(enableMultiSelection,selectedList,select);
    
  }
  return (
    <div className="container">
      <button type="button" onClick={enable}>Enable Multi Selection</button>
      {
        data.map((element, key) => (
          <div className="qanda" key={key} onClick={() => !enableMultiSelection ? handleSingleSelection(element.id) : handleMultiSelection(element.id)}>

            <div className="question">
              <p>{element.question}</p>
              <span>+</span>
            </div>

            {(select === element.id || selectedList.indexOf(element.id) !== -1) ? <p className="answer">{element.answer}</p> : null}
          </div>
        ))
      }
    </div>
  );
}

export default Accordian;
