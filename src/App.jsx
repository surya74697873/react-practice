// import Accordian from "./Accordian/Accordian";
// import HexaRGB from "./HexaRGB/HexaRGB";
// import StarRating from "./Star-Rating/StarRating";
// import Clock from "./DigitalClock/Clock";
// import ImageSlider from "./ImageSlider/ImageSlider";
import './App.css'
import FoodRecipe from './FoodRecipe/FoodRecipe';
// import FilterTable from './FilterTable/FilterTable';
// import PasswordGenerator from './PasswordGenerator/PasswordGenerator';
// import WeatherForecast from './WeatherForecast/WeatherForecast';
// import Calender from './Calender/Calender';
//import NavBar from './ResponsiveNavbar/NavBar';
// import Quiz from "./Quiz/Quiz"; 
// import Quotes from './Quotes/Quotes';

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
            {/* <WeatherForecast url='http://api.weatherapi.com/v1/current.json' apiKey='6ddd5e82bc544b8f93794446241511'/> */}
            {/* <Quotes url='https://api.api-ninjas.com/v1/quotes' apiKey='cZWKPfFHmBBxoHB2+vEW2w==dITHcEDEXE23LcVn'/> */}
            {/* <PasswordGenerator /> */}
            {/* <FilterTable /> */}
            <FoodRecipe />
        </div>
    );
}

export default App;
