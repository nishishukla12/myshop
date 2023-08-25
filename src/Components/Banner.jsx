import React from 'react'
import React, { useState } from 'react';
import Slider from 'react-slider';
function Banner() {
    const [value, setValue] = useState(50); // Initial value
  
    const handleChange = newValue => {
      setValue(newValue);
    };
  return (
    <div>
      <h2>Slider Value: {value}</h2>
      <Slider
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Banner
