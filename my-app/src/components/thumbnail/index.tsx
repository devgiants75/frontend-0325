import React, { useState } from 'react';
import './Index.css';

/*
.image-gallery {
  text-align: center;
}

.full-img {
  position: relative;
}

.displayed-img {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.thumb-bar {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.thumb-bar img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
}

*/

const Index: React.FC = () => {
  const [displayedImage, setDisplayedImage] = useState<string>('/images/dog01.jpg');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleThumbClick = (src: string) => {
    setDisplayedImage(src);
  };

  const handleButtonClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="image-gallery">
      <h1>Image Gallery Practice</h1>

      <div className="full-img">
        <img src={displayedImage} alt="대표썸네일" className="displayed-img" />
        <div 
          className="overlay" 
          style={{ backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)' }} 
        ></div>
        <button className={isDarkMode ? 'dark' : ''} onClick={handleButtonClick}>
          {isDarkMode ? 'Lighten' : 'Darken'}
        </button>
      </div>

      <div className="thumb-bar">
        <img src="/images/dog01.jpg" alt="이미지" onClick={() => handleThumbClick('/images/dog01.jpg')} />
        <img src="/images/dog02.jpg" alt="이미지" onClick={() => handleThumbClick('/images/dog02.jpg')} />
        <img src="/images/dog03.jpg" alt="이미지" onClick={() => handleThumbClick('/images/dog03.jpg')} />
        <img src="/images/dog04.jpg" alt="이미지" onClick={() => handleThumbClick('/images/dog04.jpg')} />
        <img src="/images/dog05.jpg" alt="이미지" onClick={() => handleThumbClick('/images/dog05.jpg')} />
      </div>
    </div>
  );
};

export default Index;
