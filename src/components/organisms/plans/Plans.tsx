import React from 'react'
import BtonFree from '../../atoms/plans/BtonFree'
import BtonPremium from '../../atoms/plans/BtonPremium'
import PriceFree from '../../atoms/plans/PriceFree'
import TitleCardFree from '../../atoms/plans/TitleCardFree'
import TitleCardPremium from '../../atoms/plans/TitleCardPremium'
import CardFree from '../../molecules/plans/CardFree'
import CardFreeDescription from '../../molecules/plans/CardFreeDescription'
import CardPremium from '../../molecules/plans/CardPremium'
import CardPremiumDescription from '../../molecules/plans/CardPremiumDescription'

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
        <TitleCardPremium />
        <CardPremium />
        <CardPremiumDescription />
        <BtonPremium />
      </div>
    </div>
  )
}

export default PlansCards
