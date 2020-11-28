import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout';


function BtonPremium() {

  const [product, setProduct] = useState({
    name: "Plan Deluxe",
    price: 10,
    productBy: "CommunityMatch"
  });

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:5000/pago`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE ", response);
      const {status} = response;
      console.log("STATUS ", status);

    })
    .catch(error => console.log(error));
  }

  return (
    <>
    <div className="content-btn-premium">

      <StripeCheckout
    stripeKey={"pk_test_51HrGYuJYLSe9I9Ja5FmPqHsQGjAnskGouoVXQEWPlwo8HWHu8ecx0BQHSk7lUzxefWIcqtpolUPCZvvBPW2fBdop00nyd4otiG"}
    token={makePayment}
    name="Continúa con tu compra"
    amount={product.price * 100}
    >
      <button className="btn-premium" >Comprar</button>
    </StripeCheckout>
    </div>

    </>
  )
}

export default BtonPremium
