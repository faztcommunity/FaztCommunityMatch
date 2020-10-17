import React from 'react'
import ContentDescriptionProject from '../../molecules/match/ContentDescriptionProject'
import ContentImageProjec from '../../molecules/match/ContentImageProject'
import ContentNameProject from '../../molecules/match/ContentNameProject'
import ContentOwnerProject from '../../molecules/match/ContentOwnerProject'
import ContentTypeProject from '../../molecules/match/ContentTypeProject'

function CardMatchProject() {
  return (
    <section className="card-match-project">
      <ContentImageProjec />
      <div className="section-card-project-match">
      <ContentNameProject />
      <ContentDescriptionProject />
      <ContentTypeProject />
      </div>
      <ContentOwnerProject />
    </section>
  )
}

export default CardMatchProject
