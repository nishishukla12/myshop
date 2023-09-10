import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderComponet({images}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default SliderComponet;
