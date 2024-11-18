import { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [upperCase, includeUpperCase] = useState(false);
  const [lowerCase, includeLocwerCase] = useState(false);
  const [numbers, includeNumbers] = useState(false);
  const [symbols, includeSymbols] = useState(false);
  const [password, setPassword] = useState(null)
  const [passLength, setPassLength] = useState(0);

  console.log(upperCase,lowerCase,numbers,symbols);


    function copyClipBoard(){
      navigator.clipboard.writeText(password)
    }
    
    function randomNumberGenerator(length){
        return Math.floor(Math.random() * length)
    }   
  
    function Generator(){
        let PassWordSetUp = "";
        if(upperCase) PassWordSetUp += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(lowerCase) PassWordSetUp += 'abcdefghijklmnopqrstuvwxyz'
        if(numbers) PassWordSetUp += '0123456789'
        if(symbols) PassWordSetUp += '!@#$%^&*()-_=+'

        let PassWord = new String();

        for(let i = 0; i < passLength; i++){
          PassWord += PassWordSetUp[randomNumberGenerator(PassWordSetUp.length)]
        }
        console.log(PassWord)
        setPassword(PassWord)
    }
  return (
    <div className="PasswordGenerator">
      <h1>Strong PassWord Generator</h1>
      <p>Password Length :</p>
      <input type="text" placeholder="Password Length" onChange={(e)=> setPassLength(e.target.value)}/>
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
      <button onClick={Generator}>Generate</button>
      <div className="ClipBoard">
        <input type="text" value={password} readOnly />
        <button onClick={copyClipBoard}>Copy</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
