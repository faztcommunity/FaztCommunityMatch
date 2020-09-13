import React from 'react'
import BtonAcceptTerms from '../../../atoms/Register/BtonAcceptTerms'
import BtonCancel from '../../../atoms/Register/BtonCancel'
import InfoModal from '../../../atoms/Register/InfoModal'

function ModalParagraph() {
  return (
    <div className="content-modal">
      <InfoModal />
      <h2 className="title-attention">¡ATENCIÓN!</h2>
      <h3 className="paragraph-attention">
        Al continuar con el registro, usted acepta los términos y condiciones
      </h3>
      <div className="content-buttons">
        <BtonCancel />
        <BtonAcceptTerms />
      </div>
      <a className="title-conditions" href="#" target="_blank">
        Ver términos y condiciones.
      </a>
    </div>
  )
}

export default ModalParagraph
