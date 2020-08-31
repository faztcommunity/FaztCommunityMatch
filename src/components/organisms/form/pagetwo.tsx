import React from 'react'
import BtnNext from '../../atoms/btonNext'
import FormBackground from '../background/backgroundform'

const PageFormTwo: React.FC = () => {
  return (
    <div className="content-form">
      <div className="container-btn-next">
        <BtnNext />
      </div>
      <FormBackground />
    </div>
  )
}

export default PageFormTwo
