import React from 'react'
import BtnNext from '../../../atoms/Register/BtnNext'
import DescriptionLogin from '../../../molecules/Register/description-login'
import EmailInput from '../../../molecules/Register/inputs/EmailInput'
import LastnameInput from '../../../molecules/Register/inputs/LastnameInput'
import NameInput from '../../../molecules/Register/inputs/NameInput'

function PageFormOne() {
  return (
    <>
      <NameInput aria-label="write your first name" />
      <LastnameInput aria-label="write your last name" />
      <EmailInput aria-label="write your email" />

      <DescriptionLogin />

      <div className="container-btn-next">
        <BtnNext />
      </div>
    </>
  )
}

export default PageFormOne
