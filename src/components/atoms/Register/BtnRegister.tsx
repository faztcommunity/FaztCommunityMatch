import ModalRegister from '../../organisms/Register/form/ModalRegister'
import ModalParagraph from '../../molecules/Register/Modal/ModalParagraph'
import { useRef } from 'react'

const BtnRegister = () => {


  const modalRef = useRef<any>(null)

  const openModal = () => {
    modalRef.current.openModal()
  }



  return (
    <>
      <button  type="submit" onClick={openModal} className="btn-medium-blue">
        Registrarse
      </button>
      <ModalRegister ref={modalRef}>
        <ModalParagraph />
      </ModalRegister>
    </>
  )
}

export default BtnRegister
