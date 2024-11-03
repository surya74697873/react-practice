import { useState } from "react";



const ImageSlider = ({url}) => {

    const [currentSlider, setCurrentSlider] = useState(null);
    const [images, setImages] = useState(null);


    async function apiCall() {
        let response = fetch('')
    }

    return (
        <div id="container">
            
        </div>
    );
}

export default ImageSlider;
