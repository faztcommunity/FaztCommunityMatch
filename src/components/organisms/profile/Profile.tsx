import React from 'react'
import BackgroundNav from '../../molecules/profile/BackgroundNav'
import BtnProfile from '../../molecules/profile/BtnProfile'
import BtonsMenu from '../../molecules/profile/BtonsMenu'
import PrincipalNav from '../../molecules/profile/PrincipalNav'

function Profile() {
  return (
    <>
      <nav>
        <BtonsMenu />
        <BtnProfile />
        <PrincipalNav />
        <BackgroundNav />
      </nav>
    </>
  )
}

export default Profile
