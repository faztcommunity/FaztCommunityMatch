import React from 'react'
import BackgroundNav from '../../molecules/profile/BackgroundNav'
import BtonsMenu from '../../molecules/profile/BtonsMenu'
import PrincipalNav from '../../molecules/profile/PrincipalNav'

function Profile() {
  return (
    <>
      <nav>
        <BtonsMenu />
        <PrincipalNav />
        <BackgroundNav />
      </nav>
    </>
  )
}

export default Profile
