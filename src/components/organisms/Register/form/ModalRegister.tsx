import { ButtonProps } from '@material-ui/core'
import React, { forwardRef, useImperativeHandle } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'

const ModalRegister = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const [display, setDisplay] = useState(false)

    useImperativeHandle(ref, (): any => {
      return {
        openModal: () => open(),
        close: () => close()
      }
    })

    const open = () => {
      setDisplay(true)
    }

    const close = () => {
      setDisplay(false)
    }

    if (display) {
      return ReactDOM.createPortal(
        <div className={'modal-content'}>
          <div onClick={close} className={'modal-backdrop'}></div>
          <div className={'modal-box'}>{props.children}</div>
        </div>,
        document.getElementById('modal-root')
      )
    }
    return null
  }
)

export default ModalRegister
