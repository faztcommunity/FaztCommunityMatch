import React from 'react'
import BtonFree from '../../atoms/plans/BtonFree'
import CardFree from '../../molecules/plans/CardFree'
import CardFreeDescription from '../../molecules/plans/CardFreeDescription'

function PlansCards() {
  return (
    <div className="content-card-free">
      <CardFreeDescription />
      <CardFree />
      <BtonFree />
    </div>
  )
}

export default PlansCards
