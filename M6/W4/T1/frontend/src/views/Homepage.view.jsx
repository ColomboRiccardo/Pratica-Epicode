import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const response = await fetch(
      "http://localhost:3001/api/images"
    );
    const data = await response.json();
    setPhotos(data.photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Benvenuto nella tua front end</h1>
      <p>Questa è la homepage del tuo sito</p>
      <div className="gallery">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.src.medium} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
