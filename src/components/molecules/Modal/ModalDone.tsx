import React from 'react'
import CheckModal from '../../atoms/CheckModal'

function ModalParagraph() {
  return (
    <div className="content-modal">
      <CheckModal />
      <h2 className="title-attention">¡Enhorabuena!</h2>
      <h3 className="paragraph-attention">
        Al continuar con el registro, usted acepta los términos y condiciones
      </h3>
      <div className="content-buttons">
        <BtonAcceptTerms />
      </div>
    </div>
  )
}

export default ModalParagraph
