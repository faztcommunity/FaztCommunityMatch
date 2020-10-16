import React from 'react'
import ContentDescriptionProject from '../../molecules/match/ContentDescriptionProject'
import ContentImageProjec from '../../molecules/match/ContentImageProject'
import ContentNameProject from '../../molecules/match/ContentNameProject'
import ContentTypeProject from '../../molecules/match/ContentTypeProject'

function CardMatchProject() {
  return (
    <section className="card-match-project">
      <ContentImageProjec />
      <div>
      <ContentNameProject />
      <ContentDescriptionProject />
      <ContentTypeProject />
      </div>
    </section>
  )
}

export default CardMatchProject
