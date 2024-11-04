// import Accordian from "./Accordian/Accordian";
// import HexaRGB from "./HexaRGB/HexaRGB";
// import StarRating from "./Star-Rating/StarRating";
// import Clock from "./DigitalClock/Clock";
import ImageSlider from "./ImageSlider/ImageSlider";

const App = () => {
    return (
        <div>
            {/* <HexaRGB /> */}
            {/* <Accordian/> */}
            {/* <StarRating /> */}
            {/* <Clock /> */}
            <ImageSlider url={"https://picsum.photos/v2/list"} page={5} limit={10} />
        </div>
    );
}

export default App;
