import ModalRegister from '../../organisms/Register/form/ModalRegister'
import ModalParagraph from '../../molecules/Register/Modal/ModalParagraph'
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
