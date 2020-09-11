import React from 'react'

function ModalRegister(props) {
  return (
    <div className={'modal-content'}>
      <div className={'modal-backdrop'}></div>
      <div className={'modal-box'}>{props.children}</div>
    </div>
  )
}

export default ModalRegister
