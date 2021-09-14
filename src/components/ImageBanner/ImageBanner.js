import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';


import lavender from '../../toolkit/DataService/data/flower/pics/lavender.jpg';
import orchid from '../../toolkit/DataService/data/flower/pics/orchid.jpg';
import banana from '../../toolkit/DataService/data/fruit/pics/banana.jpg';
import cherry from '../../toolkit/DataService/data/fruit/pics/cherry.jpg';

const imageListObj = {
  "lavender": lavender,
  "orchid": orchid,
  "banana": banana,
  "cherry": cherry
}

function ImageBanner(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let imageList = [];
  for(let image in imageListObj){
    let imageItem = (
      <Carousel.Item interval={2000} key={image}>
        <img
          className="d-block w-100"
          src={imageListObj[image]}
          alt={image}
        />
      </Carousel.Item>
    );
    imageList.push(imageItem);
  }

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect} 
      variant={props.darkMode ? "dark" : "light"}>
        {imageList}
    </Carousel>
  );
}

export { ImageBanner };