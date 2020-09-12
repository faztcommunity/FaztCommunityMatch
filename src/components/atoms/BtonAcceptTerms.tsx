import React from 'react'
import { useRef } from 'react'
import ModalDone from '../molecules/Modal/ModalDone'
import ModalRegisterDone from '../organisms/form/ModalRegisterDone'

function BtonAcceptTerms() {
  /* const modalDoneRef = useRef<any>(null)

  const openModalDone = () => {
    console.log(modalDoneRef.current.openModalDone())
  } */
  return (
    <>
      <a /* onClick={openModalDone} */ className="accept-terms">
        Si, Continuar
      </a>
      {/* <ModalRegisterDone ref={modalDoneRef}>
        <ModalDone />
      </ModalRegisterDone> */}
    </>
  )
}

export default BtonAcceptTerms
