import React from 'react'
import BtonFree from '../../atoms/plans/BtonFree'
import PriceFree from '../../atoms/plans/PriceFree'
import TitleCardFree from '../../atoms/plans/TitleCardFree'
import CardFree from '../../molecules/plans/CardFree'
import CardFreeDescription from '../../molecules/plans/CardFreeDescription'
import CardPremium from '../../molecules/plans/CardPremium'

function PlansCards() {
  return (
    <div className="content-plans">
      <div className="content-card-free">
        <TitleCardFree />
        <CardFreeDescription />
        <CardFree />
        <BtonFree />
        <PriceFree />
      </div>
      <div className="content-card-premium">
        <CardPremium />
      </div>
    </div>
  )
}

export default PlansCards
