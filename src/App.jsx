// import Accordian from "./Accordian/Accordian";
// import HexaRGB from "./HexaRGB/HexaRGB";
// import StarRating from "./Star-Rating/StarRating";
// import Clock from "./DigitalClock/Clock";
// import ImageSlider from "./ImageSlider/ImageSlider";
import './App.css'
import WeatherForecast from './WeatherForecast/WeatherForecast';
// import Calender from './Calender/Calender';
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
            {/* <Calender /> */}
            <WeatherForecast url='http://api.weatherapi.com/v1/current.json' />
        </div>
    );
}

export default App;
