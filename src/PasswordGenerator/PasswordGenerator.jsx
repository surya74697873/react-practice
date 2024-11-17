import { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [upperCase, includeUpperCase] = useState(false);
  const [lowerCase, includeLocwerCase] = useState(false);
  const [numbers, includeNumbers] = useState(false);
  const [symbols, includeSymbols] = useState(false);

  console.log(upperCase,lowerCase,numbers,symbols);

    function randowNumberGenerator(length){
        return Math.floor(Math.random() * length)
    }   
  
    function Generator(length){
        let PassWordSetUp = "";
        if(upperCase) PassWord += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(lowerCase) PassWord += 'abcdefghijklmnopqrstuvwxyz'
        if(numbers) PassWord += '0123456789'
        if(symbols) PassWord += '!@#$%^&*()-_=+'

        let PassWord = '';

        for(let i = 0; i < length; i++){

        }
    }
  return (
    <div className="PasswordGenerator">
      <h1>Strong PassWord Generator</h1>
      <p>Password Length :</p>
      <input type="text" placeholder="Password Length" />
      <div className="checklists">
        {" "}
        <input
          type="checkbox"
          checked={upperCase}
          onChange={(e) => includeUpperCase(e.target.checked)}
        />{" "}
        <span>Include Uppercase</span>
      </div>
      <div className="checklists">
        {" "}
        <input
          type="checkbox"
          checked={lowerCase}
          onChange={(e) => includeLocwerCase(e.target.checked)}
        />{" "}
        <span>Include Lowercase</span>
      </div>
      <div className="checklists">
        {" "}
        <input
          type="checkbox"
          checked={numbers}
          onChange={(e) => includeNumbers(e.target.checked)}
        />{" "}
        <span>Include Numbers</span>
      </div>
      <div className="checklists">
        {" "}
        <input
          type="checkbox"
          checked={symbols}
          onChange={(e) => includeSymbols(e.target.checked)}
        />{" "}
        <span>Include Symbols</span>
      </div>
      <button>Generate</button>
      <div className="ClipBoard">
        <input type="text" readOnly />
        <button>Copy</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
