import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, About, Services, Contact } from "./List";
import "./NavBar.css";
import { useEffect, useState } from "react";

const LayOut = () => {
  const [visible, setVisible] = useState(true);


  function trackSize() {
    if(window.innerWidth > 420)
      setVisible(false)
  }

  useEffect(() => {
    trackSize();

    window.addEventListener('resize',trackSize)

    console.log("Mounted")
    
    return () => {window.removeEventListener('resize',trackSize); console.log("unmounted");}
    
  },[])

  function menuBar(){
    setVisible(prev => !prev)  
  }
  
  return (
    <div className="LayOut">
      <h1>LOGO</h1>
      <ul className={visible ? "Visible" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className={`Menu`} onClick={menuBar}>
        <i ></i>
        <i ></i>
        <i ></i>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="NavBar">
      <BrowserRouter>
        <LayOut />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
