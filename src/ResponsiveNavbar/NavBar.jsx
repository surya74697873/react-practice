import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, About, Services, Contact } from "./List";
import "./NavBar.css";

const LayOut = () => {
  return (
    <div className="LayOut">
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/services'}>Services</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
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
          <Route path="services" element={<Services/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
