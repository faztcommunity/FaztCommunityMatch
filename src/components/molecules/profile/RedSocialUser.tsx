import React from 'react'
import IconAddRedSocial from '../../atoms/profile/IconAddRedSocial'
import IconCircleSocial from '../../atoms/profile/IconCircleSocial'

function RedSocialUser() {
  return (
    <div className="content-social-user">
      <h3 className="text-description-user">Redes sociales</h3>
      <div className="box-social-user">
        <div className="conten-add-user">
          <IconCircleSocial />
          <IconAddRedSocial />
        </div>
      </div>
    </div>
  )
}

export default RedSocialUser
