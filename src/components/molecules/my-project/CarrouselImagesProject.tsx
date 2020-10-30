import React, { useEffect } from 'react'
import { useReducer } from 'react';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable/types';
import { Transform } from 'stream';
import LittleImage from '../../../assets/png/little-image.png'
import ImgCarrouselFive from '../../atoms/my-project/ImgCarrouselFive';
import ImgCarrouselFour from '../../atoms/my-project/ImgCarrouselFour';
import ImgCarrouselOne from '../../atoms/my-project/ImgCarrouselOne';
import ImgCarrouselThree from '../../atoms/my-project/ImgCarrouselThree';
import ImgCarrouselTwo from '../../atoms/my-project/ImgCarrouseltwo';

function CarrouselImagesProject() {
const [x, setX] = useState(0)


/* array components for show inside the slide */
let sliderArr =
[<ImgCarrouselOne />,
<ImgCarrouselTwo />,
<ImgCarrouselThree />,
<ImgCarrouselFour />,
<ImgCarrouselFive />]

const goLeft =() => {
  x=== 0 ? setX(-100*(sliderArr.length-1)): setX(x + 100)
};
const goRight =() => {
  x=== -100*(sliderArr.length-1) ?setX(0): setX(x - 100)
};

  return (
      <div className="global-content-carrousel">
    <div className="slider-carrousel">
{
  sliderArr.map((item, index)=> {
    return(
      <div key={index} className="slide-carrousel" style={{transform: `translateX(${x}%)`}}>
        {item}
      </div>
    )
  })
}
  <button className="carrousel-btn-left" id="goLeft" onClick={goLeft}>
  <svg className="svg-carrousel" width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2778 6.80988C14.6112 7.57968 14.6112 9.50418 13.2778 10.274L2.99911 16.2084C1.66578 16.9782 -0.000884791 16.016 -0.00088481 14.4764L-0.000884951 2.60751C-0.000884969 1.06791 1.66578 0.10566 2.99912 0.875461L13.2778 6.80988Z"/>
</svg>
  </button>
  <button className="carrousel-btn-right" id="goRight" onClick={goRight}>
  <svg className="svg-carrousel" width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.46094 10.2741C0.127603 9.5043 0.127604 7.5798 1.46094 6.81L11.7397 0.875581C13.073 0.105781 14.7397 1.06803 14.7397 2.60763L14.7397 14.4765C14.7397 16.0161 13.073 16.9783 11.7397 16.2085L1.46094 10.2741Z"/>
</svg>
</button>

    </div>
    </div>
  )
}

export default CarrouselImagesProject
