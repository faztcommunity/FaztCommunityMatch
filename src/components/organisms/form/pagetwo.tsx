import React from 'react'
import BtnNext from '../../atoms/btonNext'
import FormBackground from '../background/backgroundform'
import DescriptionLogin from '../../molecules/description-login'
import EmailInput from '../../molecules/inputs/input-email'
import LastnameInput from '../../molecules/inputs/input-lastname'

const PageFormTwo: React.FC = () => {
  return (
    <div className="content-form">
      <LastnameInput />
      <EmailInput />
      <p className="content-description">
        <DescriptionLogin />
      </p>
      <div className="container-btn-next">
        <BtnNext />
      </div>
      <FormBackground />
    </div>
  )
}

export default PageFormTwo
