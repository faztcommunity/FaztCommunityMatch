import React from 'react'
import IconUserProfile from '../../atoms/profile/IconUserProfile'

function BtnProfile() {
  return (
    <div className="content-btn-profile">
      <div className="background-hover-profile">
        <div className="circle-profile">
          <IconUserProfile />
        </div>
        <a className="text-profile">Nombre</a>
      </div>
    </div>
  )
}

export default BtnProfile
