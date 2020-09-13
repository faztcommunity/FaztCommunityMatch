import { ButtonProps } from '@material-ui/core'
import React, { forwardRef, useImperativeHandle } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'

const ModalRegisterDone = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const [displayTwo, setDisplaytwo] = useState(true)

    useImperativeHandle(ref, (): any => {
      return {
        openModalDone: () => open(),
        close: () => close()
      }
    })

    const open = () => {
      setDisplaytwo(true)
    }

    const close = () => {
      setDisplaytwo(false)
    }

    if (displayTwo) {
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

export default ModalRegisterDone
