import React from 'react'
import BtonAcceptTerms from '../../atoms/BtonAcceptTerms'
import BtonCancel from '../../atoms/BtonCancel'
import InfoModal from '../../atoms/InfoModal'

function ModalParagraph() {
  return (
    <div className="content-modal-paragraph">
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
