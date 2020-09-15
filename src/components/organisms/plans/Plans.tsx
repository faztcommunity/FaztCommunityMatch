import React from 'react'
import BtonFree from '../../atoms/plans/BtonFree'
import PriceFree from '../../atoms/plans/PriceFree'
import TitleCardFree from '../../atoms/plans/TitleCardFree'
import CardFree from '../../molecules/plans/CardFree'
import CardFreeDescription from '../../molecules/plans/CardFreeDescription'

function PlansCards() {
  return (
    <div className="content-card-free">
      <TitleCardFree />
      <CardFreeDescription />
      <CardFree />
      <BtonFree />
      <PriceFree />
    </div>
  )
}

export default PlansCards
