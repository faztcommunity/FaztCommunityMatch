import React, { useRef, useState } from 'react'
import TitleRpass from '../../atoms/titleRpass'
import InputPass from '../../molecules/input-pass'
import ConfirmPass from '../../molecules/inputs/input-confirmpass'
import BtnmReturn from '../../atoms/btonReturn'
import BtnMblue from '../../atoms/btnMblue'
import FormBackground from '../background/backgroundform'

const PageFormOne: React.FC = () => {
  return (
    <form action="" className="content-form">
      <TitleRpass />
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
      <FormBackground />
    </form>
  )
}

export default PageFormOne
