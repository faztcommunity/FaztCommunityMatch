import React from 'react'

import InputPass from '../../components/molecules/input-pass'
import FormBackground from '../../components/organisms/form/Oform'
import ConfirmPass from '../../components/molecules/inputs/input-confirmpass'

const Register: React.FC = () => {
  return (
    <>
      <form action="" className="content-form">
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
