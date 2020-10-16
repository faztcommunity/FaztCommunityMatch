import React from 'react'
import ContentImageProjec from '../../molecules/match/ContentImageProject'
import ContentNameProject from '../../molecules/match/ContentNameProject'

function CardMatchProject() {
  return (
    <section className="card-match-project">
      <ContentImageProjec />
      <div>
      <ContentNameProject />
      </div>
    </section>
  )
}

export default CardMatchProject
