import React from 'react'
import ModalRegister from '../organisms/form/ModalRegister'
import ModalParagraph from '../molecules/Modal/ModalParagraph'

const BtnRegister: React.FC = () => {
  const openModal = () => {
    console.log('Open Modal')
  }

  return (
    <>
      <a onClick={openModal} className="btn-medium-blue">
        Registrarse
      </a>
      <ModalRegister>
        <ModalParagraph />
      </ModalRegister>
    </>
  )
}

export default BtnRegister
