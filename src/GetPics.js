import React from "react";
import { useState, useEffect } from "react";
import Image from "./Image";

function GetPics() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setImages(data);
      console.log(data);
    };
    fetchImages();
  }, []);
  return (
    <div id="images-box">
      {images.map((image) => (
        <Image key={image.id} {...image} />
      ))}
    </div>
  );
}

export default GetPics;
