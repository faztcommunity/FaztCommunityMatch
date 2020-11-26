import BtonPremium from '../../atoms/plans/BtonPremium'
import PricePremium from '../../atoms/plans/PricePremium'

function CardPremiumDescription() {

  return (
    <div className="card-premium-description">
      <p className="description-premium">Ver usuarios ilimitadamente</p>
      <span className="under-line"></span>
      <p className="description-premium">Ver proyectos ilimitadamente</p>
      <span className="under-line"></span>
      <p className="description-premium">
        Estrellas ilimitadas para reaccionar
      </p>
      <span className="under-line"></span>
      <p className="description-premium">
        Corazones ilimitados para reaccionar
      </p>
      <span className="under-line"></span>
      <p className="description-premium">
        Retrocesos ilimitados para ver usuarios y proyectos
      </p>
      <BtonPremium />
      <PricePremium />
    </div>
  )
}

export default CardPremiumDescription
