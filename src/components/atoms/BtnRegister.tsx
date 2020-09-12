import React from 'react'
import ModalRegister from '../organisms/form/ModalRegister'
import ModalParagraph from '../molecules/Modal/ModalParagraph'
import { useRef } from 'react'

function BtnRegister() {
  const modalRef = useRef<any>(null)

  const openModal = () => {
    modalRef.current.openModal()
  }

  return (
    <>
      <a onClick={openModal} className="btn-medium-blue">
        Registrarse
      </a>
      <ModalRegister ref={modalRef}>
        <ModalParagraph />
      </ModalRegister>
    </>
  )
}

export default BtnRegister
