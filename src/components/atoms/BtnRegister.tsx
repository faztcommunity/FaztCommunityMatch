import React from 'react'
import ModalRegister from '../organisms/form/ModalRegister'

const BtnRegister: React.FC = () => {
  const openModal = () => {
    console.log('Open Modal')
  }

  return (
    <>
      <a onClick={openModal} className="btn-medium-blue">
        Registrarse
      </a>
      <ModalRegister />
    </>
  )
}

export default BtnRegister
