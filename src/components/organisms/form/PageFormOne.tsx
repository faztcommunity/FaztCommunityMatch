import React from 'react'
import BtnNext from '../../atoms/BtnNext'
import DescriptionLogin from '../../molecules/description-login'
import EmailInput from '../../molecules/inputs/EmailInput'
import LastnameInput from '../../molecules/inputs/LastnameInput'
import NameInput from '../../molecules/inputs/NameInput'

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
