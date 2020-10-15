import React from 'react'
import { useState } from 'react'
import CheckModal from '../../atoms/Register/CheckModal'

function TestCompleted() {


  return (

    <>
<div className="modal-information">
    <div className="content-modal-information">
<CheckModal />
<h2 className="title-attention">¡Genial!</h2>
<p className="paragraph-register">Has terminado de realizar el test, ahora podras
hacer Match.</p>
<button className="btn-next-match">Continuar</button>
</div>
</div>
    </>
  )
}

export default TestCompleted
