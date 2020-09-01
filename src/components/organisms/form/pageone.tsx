import React from 'react'
import InputPass from '../../molecules/input-pass'
import ConfirmPass from '../../molecules/inputs/input-confirmpass'
import BtnmReturn from '../../atoms/btonReturn'
import BtnMblue from '../../atoms/btnMblue'

const PageFormOne: React.FC = () => {
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
          <BtnMblue />
        </div>
      </div>
    </>
  )
}

export default PageFormOne
