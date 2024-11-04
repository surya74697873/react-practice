import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
// import { Bars } from "react-loading-icons";
import "./ImageSlider.css";
import Oval from "react-loading-icons/dist/esm/components/oval";

const ImageSlider = ({ url, page = 5, limit = 0 }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function apiCall(getURL) {
    try {
      setLoading(true);
      let response = await fetch(`${getURL}?page=${page}&limit=${limit}`);
      let data = await response.json();
      setImages(data);
      setLoading(false);
      console.table(images);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url != "") apiCall(url);
  }, [url, page, limit]);

  function prevImage() {
    setCurrentSlider((prev) => (prev == 0 ? images.length - 1 : prev - 1));
  }

  function nextImage() {
    setCurrentSlider((next) => (next == images.length - 1 ? 0 : next + 1));
  }

  // if (loading) return <div id="load">Loading... Please Wait</div>;

  if (loading)
    return (
      <div id="load">
        <Oval
          style={{ height: "50px", width: "50px", background: "wheat" }}
          stroke="black"
        />
      </div>
    );

  return (
    <div id="container">
      <BiArrowFromLeft
        onClick={prevImage}
        style={{
          cursor: "pointer",
          fontSize: "1.5em",
          position: "absolute",
          background: "white",
          bottom: "50%",
          borderRadius: "50%",
          left: "0.5em",
        }} 
      />

      {images.length > 0 ? (
        images.map((image, index) => (
          <img
            src={image.download_url}
            alt={image.download_url}
            key={index}
            className={currentSlider !== index ? "inactive" : "active"}
          />
        ))
      ) : (
        <p>Images Not Received</p>
      )}

      <BiArrowFromRight
        onClick={nextImage}
        style={{
          cursor: "pointer",
          fontSize: "1.5em",
          position: "absolute",
          background: "white",
          bottom: "50%",
          borderRadius: "50%",
          right: "0.5em",
        }}
      />

      <div className="round-bar">
        {[...Array(images.length)].map((_, index) => {
          return (
            <div
              key={index}
              className={
                currentSlider !== index ? "inactive-round" : "active-round"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  url: PropTypes.string.isRequired,
  page: PropTypes.number,
  limit: PropTypes.number,
};

export default ImageSlider;
