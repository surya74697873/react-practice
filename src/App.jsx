// import Accordian from "./Accordian/Accordian";
// import HexaRGB from "./HexaRGB/HexaRGB";
// import StarRating from "./Star-Rating/StarRating";
// import Clock from "./DigitalClock/Clock";
// import ImageSlider from "./ImageSlider/ImageSlider";
import './App.css'
import Calender from './Calender/Calender';
//import NavBar from './ResponsiveNavbar/NavBar';
// import Quiz from "./Quiz/Quiz";

const App = () => {
    return (
        <div className="App" >
            {/* <HexaRGB /> */}
            {/* <Accordian/> */}
            {/* <StarRating /> */}
            {/* <Clock /> */}
            {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={5} limit={10} /> */}
            {/* <NavBar /> */}
            {/* <Quiz /> */}
            <Calender />
        </div>
    );
}

export default App;
