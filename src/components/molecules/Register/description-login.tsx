import { useCallback, useState } from "react"
import ModalSolutionPass from "./ModalSolutionPass";

function DescriptionLogin() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };


  return (
    <>
      <p className="forgot-account">
        ¿Has olvidado tu contraseña?
        <a href="#" onClick={openModal}>
          <span className="log-in"> Solucionar</span>
        </a>
      </p>
      <ModalSolutionPass
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  )
}

export default DescriptionLogin
