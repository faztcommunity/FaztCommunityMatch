import React from 'react'
import InputPass from '../../molecules/input-pass'
import ConfirmPass from '../../molecules/inputs/ConfirmPass'
import BtnmReturn from '../../atoms/BtnmReturn'
import BtnRegister from '../../atoms/BtnRegister'
import ModalRegister from './ModalRegister'

function PageFormTwo() {
  return (
    <>
      <div className="content-input">
        <InputPass />
        <ConfirmPass />
      </div>
      <div className="container-btns-register">
        <div className="containerbtn-return">
          <BtnmReturn />
        </div>
        <div className="containerbtn-blue">
          <BtnRegister />
        </div>
      </div>
    </>
  )
}

export default PageFormTwo
