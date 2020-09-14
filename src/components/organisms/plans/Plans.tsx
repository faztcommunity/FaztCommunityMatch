import React from 'react'
import CardFree from '../../molecules/plans/CardFree'
import CardFreeDescription from '../../molecules/plans/CardFreeDescription'

function PlansCards() {
  return (
    <div className="content-card-free">
      <CardFreeDescription />
      <CardFree />
    </div>
  )
}

export default PlansCards
