import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const ImageSlider = ({ url, page = 5, limit = 0 }) => {

    const [currentSlider, setCurrentSlider] = useState(0);
    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(false)


    async function apiCall(getURL) {
        try {
            setLoading(true)
            let response = await fetch(`${getURL}?page=${page}&limit=${limit}`)
            let data = await response.json()
            setImages(data)
            setLoading(false)
            console.table(images);

        } catch (error) {
            console.log(error);
            setLoading(false)
        }

    }

    useEffect(() => {
        if (url != "")
            apiCall(url)
    }, [url, page, limit])

    function prevImage() {
        setCurrentSlider((prev) => prev == 0 ? images.length - 1 : prev - 1)
    }

    function nextImage() {
        setCurrentSlider((next) => next == images.length - 1 ? 0 : next + 1)
    }

    if (loading)
        return <div>Loading... Please Wait</div>


    return (
        <div id="container">
            <BiArrowFromLeft onClick={prevImage} style={{ cursor: "pointer" }} />

            {images.length > 0 ? images.map((image, index) => {
                return <img src={image.url} alt={image.download_url} key={index} />
            }) : <p>Images Not Received</p>}

            <BiArrowFromRight onClick={nextImage} style={{ cursor: "pointer" }} />
        </div>
    );
}

ImageSlider.prototype = {
    url: PropTypes.string.isRequired,
    page: PropTypes.number,
    limit: PropTypes.number,
}

export default ImageSlider;
