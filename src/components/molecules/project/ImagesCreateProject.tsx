import React from 'react'
import imageone from '../../../assets/images/image-1.jpg'
import imagetwo from '../../../assets/images/image-2.jpg'
import imagethree from '../../../assets/images/image-3.jpg'


function ImagesCreateProject() {
  return (

<div className="content-images">
  <div className="content-image-one">
<img className="image-one" src={imageone}/>
</div>
<div className="content-image-two">
<img className="image-two" src={imagetwo} alt="Imagen de una persona trabajando en un proyecto digital"/>
</div>
<div className="content-image-three">
<img className="image-three" src={imagethree} alt="Imagen de un proyecto artistico"/>
</div>
</div>

  )
}

export default ImagesCreateProject
