import React from 'react'
import { useRef } from 'react'
import ModalRegisterDone from '../organisms/form/ModalRegisterDone'

function BtonAcceptTerms() {
  const modalDoneRef = useRef<any>(null)

  const openModal = () => {
    modalDoneRef.current.openModal()
  }

  return (
    <>
      <a onClick={openModal} className="accept-terms">
        Si, Continuar
      </a>
      <ModalRegisterDone ref={modalDoneRef}></ModalRegisterDone>
    </>
  )
}

export default BtonAcceptTerms
