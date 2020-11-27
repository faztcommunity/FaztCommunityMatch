import React from 'react'

const ModalLogin = ({showModal, setShowModal}) => {
    return (
        <>
        {showModal
        ?
        <div className="backgron-modal-login"><h1>Hola desde modal</h1></div>
        : null}

        </>
    )
}

export default ModalLogin
