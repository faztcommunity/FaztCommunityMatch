import React from 'react'

import InputPass from '../../components/molecules/input-pass'
import FormBackground from '../../components/organisms/form/Oform'
import ConfirmPass from '../../components/molecules/inputs/input-confirmpass'
import TitleRpass from '../../components/atoms/titleRpass'

const Register: React.FC = () => {
  return (
    <>
      <form action="" className="content-form">
        <TitleRpass />
        <div className="content-input">
          <InputPass />
          <ConfirmPass />
        </div>

        <FormBackground />
      </form>
    </>
  )
}
export default Register
