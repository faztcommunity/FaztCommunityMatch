import React from 'react'
import TitleNameUser from '../../atoms/profile/TitleNameUser'
import BackgroundProfileUser from '../../molecules/profile/BackgroundProfileUser'
import CircleUser from '../../molecules/profile/CircleUser'
import DescriptionUser from '../../molecules/profile/DescriptionUser'
import MenuCardUser from '../../molecules/profile/MenuCardUser'

function SectionUserInfo() {
  return (
    <div className="content-section-user">
      <TitleNameUser />
      <CircleUser />
      <BackgroundProfileUser />
      <MenuCardUser />
      <DescriptionUser />
    </div>
  )
}

export default SectionUserInfo
