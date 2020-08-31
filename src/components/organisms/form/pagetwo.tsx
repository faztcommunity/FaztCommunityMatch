import React from 'react'
import BtnNext from '../../atoms/btonNext'
import FormBackground from '../background/backgroundform'
import DescriptionLogin from '../../molecules/description-login'

const PageFormTwo: React.FC = () => {
  return (
    <div className="content-form">
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
