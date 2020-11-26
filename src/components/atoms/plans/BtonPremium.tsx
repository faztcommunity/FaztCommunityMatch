import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout';


function BtonPremium() {

  const [product, setProduct] = useState({
    name: "Plan Deluxe",
    price: 10,
    productBy: "CommunityMatch"
  });

  return (
    <>
    <div className="content-btn-premium">

      <StripeCheckout
    className="btn-premium"
    stripeKey=""
    token=""
    name="Continua con tu compra"
    >
      <button className="btn-premium" >Comprar</button>
    </StripeCheckout>
    </div>

    </>
  )
}

export default BtonPremium
