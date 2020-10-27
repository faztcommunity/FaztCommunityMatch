import React from 'react'
import AddImagePrincipal from '../../molecules/create-project/AddImagePrincipal'
import ContentInfo from '../../molecules/create-project/ContentInfo'
import AddImage from '../../../assets/images/Add-image.jpg'

function ColumnProjectOne() {
  return (
<article>
  <ContentInfo />
  <div className="content-add-image-principal">
  <AddImagePrincipal />
  <img src={AddImage} alt="Agregar imagen principal"/>
  </div>
</article>
  )
}

export default ColumnProjectOne
