import React from 'react'
import InputPass from '../../../molecules/Register/input-pass'
import ConfirmPass from '../../../molecules/Register/inputs/ConfirmPass'
import BtnmReturn from '../../../atoms/Register/BtnmReturn'
import BtnRegister from '../../../atoms/Register/BtnRegister'

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
