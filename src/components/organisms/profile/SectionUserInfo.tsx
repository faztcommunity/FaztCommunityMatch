import React from 'react'
import TitleNameUser from '../../atoms/profile/TitleNameUser'
import BackgroundProfileUser from '../../molecules/profile/BackgroundProfileUser'
import CircleUser from '../../molecules/profile/CircleUser'

function SectionUserInfo() {
  return (
    <div className="content-section-user">
      <TitleNameUser />
      <CircleUser />
      <BackgroundProfileUser />
    </div>
  )
}

export default SectionUserInfo
