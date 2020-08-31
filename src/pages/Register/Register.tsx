import React from 'react'

import InputPass from '../../components/molecules/input-pass'
import FormBackground from '../../components/organisms/form/Oform'
import ConfirmPass from '../../components/molecules/inputs/input-confirmpass'
import TitleRpass from '../../components/atoms/titleRpass'
import BtnMblue from '../../components/atoms/btnMblue'

const Register: React.FC = () => {
  return (
    <>
      <form action="" className="content-form">
        <TitleRpass />
        <div className="content-input">
          <InputPass />
          <ConfirmPass />
        </div>
        <div className="containerbtn-blue">
          <BtnMblue />
        </div>
        <FormBackground />
      </form>
    </>
  )
}
export default Register
