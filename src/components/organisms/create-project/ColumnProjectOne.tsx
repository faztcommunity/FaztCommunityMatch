import React from 'react'
import AddImagePrincipal from '../../molecules/create-project/AddImagePrincipal'
import ContentInfo from '../../molecules/create-project/ContentInfo'
import AddImage from '../../../assets/images/Add-image.jpg'
import AddMoreImages from '../../molecules/create-project/AddMoreImages'
import AddImageMini from '../../molecules/create-project/AddImageMini'

function ColumnProjectOne() {
  return (
<article>
  <ContentInfo />
  <div className="container-add-image">
  <div className="content-add-image-one">
  <AddImagePrincipal />
  <img src={AddImage} alt="Agregar imagen principal"/>
  </div>

  <div className="content-add-image-two">
  <AddMoreImages />
  <img src={AddImage} alt="Agregar imagen principal"/>
  </div>
  </div>
  <div>
  <AddImageMini />
  </div>
</article>
  )
}

export default ColumnProjectOne
